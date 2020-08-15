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
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });

    test("Verify Received User Message", async t  => {
        await loginPage.loginUser(testData.user2.email, testData.user2.password);
        await messagesPage.openChatRoomWith(testData.user1.displayName);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });


fixture `Verify Send/Receive Group message`
    .page `${testData.webUrl}`;

    test("Send Group Message", async t  => {
        await loginPage.loginUser(testData.user1.email, testData.user1.password);
        await messagesPage.openChatRoomWith(testData.automationGroupTitle);
    
        randomNumber = Math.floor(Math.random() * Math.floor(100));
        await messagesPage.verifyMsgBtnAndSendMsgInGroup(testData.msgPrefix+randomNumber);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });

    test("Verify Received Group Message", async t  => {
        await loginPage.loginUser(testData.user2.email, testData.user2.password);
        await messagesPage.openChatRoomWith(testData.automationGroupTitle);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });