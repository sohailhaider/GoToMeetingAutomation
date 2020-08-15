import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.emailAddress = Selector("#emailAddress");
        this.nextButton = Selector("#next-button");
        this.password = Selector("#password");
        this.submitBtn = Selector("#submit");

        this.spinner = Selector(".spinner");
        this.h3 = Selector("h3").withText("Meet like a pro with a personal meeting room.");
    }

    loginUser(email, password) {
        return t.typeText(this.emailAddress, email)
            .click(this.nextButton)
            .typeText(this.password, password)
            .click(this.submitBtn)
            .wait(5000) //UNEXPECTED VARIETY OF BEHAVIOR: using WAIT because sometimes loader shows sometimes it doesn't and sometimes it would show up twice.
            .expect(this.h3.exists).ok({ timeout: 50000 });
    }
}

export default new LoginPage();