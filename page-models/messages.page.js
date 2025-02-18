import { Selector, t } from 'testcafe';

class MessagesPage {
    constructor() {
        this.chatsBtn = Selector("[title='Chats']");
        this.room = Selector("span[data-testid='room-name']");
        this.msgInput = Selector("div[role='textbox']");
        this.groupMsgInput = Selector("div[role='combobox']");
        this.sendMsgBtn = Selector('[data-testid="message-submit-button"]');
        this.chatTitle = Selector('.contact-details');

        this.lastMessageEntry = Selector('.message-entry').nth(-1);
        this.lastMsgEntryTitle = this.lastMessageEntry.find(".message-from");
        this.lastMsgEntryText = this.lastMessageEntry.find(".text-message");

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
            .click(this.sendMsgBtn).wait(2000);
    }

    verifyMsgBtnAndSendMsgInGroup(msg) {
        return t
            .expect(this.sendMsgBtn.hasAttribute('disabled')).ok()
            .typeText(this.groupMsgInput, msg)
            .expect(this.sendMsgBtn.hasAttribute('disabled')).notOk()
            .click(this.sendMsgBtn).wait(2000);
    }

    verifylastMsgInChat(title, msg) {
        return t
            .expect(this.lastMsgEntryTitle.textContent).eql(title)
            .expect(this.lastMsgEntryText.textContent).contains(msg).wait(2000);
    }

}

export default new MessagesPage();