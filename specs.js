import * as testData from './testdata.json';
import loginPage from './page-models/login.page';
import messagesPage from './page-models/messages.page';

let randomNumber;

fixture `Verify Send/Receive User message`
    .page `${testData.webUrl}`;

test("Send User Message", async t  => {
    await loginPage.loginUser(testData.user1.email, testData.user1.password);
    await messagesPage.openChatRoomWith(testData.user2.displayName);
    
    randomNumber = Math.floor(Math.random() * Math.floor(100));
    await messagesPage.verifyMsgBtnAndSendMsg(testData.msgPrefix+randomNumber);
});
