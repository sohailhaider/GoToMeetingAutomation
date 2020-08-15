import { Selector, t } from 'testcafe';

class MessagesPage {
    constructor() {
        this.chatsBtn = Selector("[title='Chats']");
        this.room = Selector("span[data-testid='room-name']");
        this.msgInput = Selector("div[role='textbox']");
        this.sendMsgBtn = Selector('[data-testid="message-submit-button"]');
        this.chatTitle = Selector('.contact-details');
    }

    openChatRoomWith(name){
        return t
            .click(this.chatsBtn)
            .click(this.room.withText(name))
            .expect(this.chatTitle.textContent).eql(name);
    }

    verifyMsgBtnAndSendMsg(msg) {
        return t
            .expect(this.sendMsgBtn.hasAttribute('disabled')).ok()
            .typeText(this.msgInput, msg)
            .expect(this.sendMsgBtn.hasAttribute('disabled')).notOk()
            .click(this.sendMsgBtn);
    }

}

export default new MessagesPage();