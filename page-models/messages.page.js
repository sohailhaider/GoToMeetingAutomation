import { Selector, t } from 'testcafe';

class MessagesPage {
    constructor() {
        this.chatsBtn = Selector("a[title='Chats']");
        this.room = Selector(".room");
    }

    openChatRoomWith(name){
        return t
            .click(this.chatsBtn)
            .click(this.room.withText(name))
            .wait(5000);
    }
}

export default new MessagesPage();