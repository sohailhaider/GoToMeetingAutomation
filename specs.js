import * as testData from './testdata.json';
import loginPage from './page-models/login.page';
import messagesPage from './page-models/messages.page';

let randomNumber;

fixture `Verify Send/Receive User message`
    .page `${testData.webUrl}`;

    test("Send User Message - Normal Message", async t  => {
        await loginPage.loginUser(testData.user1.email, testData.user1.password);
        await messagesPage.openChatRoomWith(testData.user2.displayName);
    
        randomNumber = Math.floor(Math.random() * Math.floor(100));
        await messagesPage.verifyMsgBtnAndSendMsg(testData.msgPrefix+randomNumber);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });

    test("Verify Received User Message - Normal Message", async t  => {
        await loginPage.loginUser(testData.user2.email, testData.user2.password);
        await messagesPage.openChatRoomWith(testData.user1.displayName);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });

    test("Send User Message - Special Characters in Message", async t  => {
        await loginPage.loginUser(testData.user1.email, testData.user1.password);
        await messagesPage.openChatRoomWith(testData.user2.displayName);
    
        await messagesPage.verifyMsgBtnAndSendMsg(testData.msgWithSpecialChars);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgWithSpecialChars);
    });

    test("Verify Received User Message - Special Characters in Message", async t  => {
        await loginPage.loginUser(testData.user2.email, testData.user2.password);
        await messagesPage.openChatRoomWith(testData.user1.displayName);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgWithSpecialChars);
    });


fixture `Verify Send/Receive Group message`
    .page `${testData.webUrl}`;

    test("Send Group Message - Normal Message", async t  => {
        await loginPage.loginUser(testData.user1.email, testData.user1.password);
        await messagesPage.openChatRoomWith(testData.automationGroupTitle);
    
        randomNumber = Math.floor(Math.random() * Math.floor(100));
        await messagesPage.verifyMsgBtnAndSendMsgInGroup(testData.msgPrefix+randomNumber);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });

    test("Verify Received Group Message - Normal Message", async t  => {
        await loginPage.loginUser(testData.user2.email, testData.user2.password);
        await messagesPage.openChatRoomWith(testData.automationGroupTitle);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgPrefix+randomNumber);
    });

    test("Send Group Message - Special Characters in Message", async t  => {
        await loginPage.loginUser(testData.user1.email, testData.user1.password);
        await messagesPage.openChatRoomWith(testData.automationGroupTitle);
    
        await messagesPage.verifyMsgBtnAndSendMsgInGroup(testData.msgWithSpecialChars);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgWithSpecialChars);
    });

    test("Verify Received Group Message - Special Characters in Message", async t  => {
        await loginPage.loginUser(testData.user2.email, testData.user2.password);
        await messagesPage.openChatRoomWith(testData.automationGroupTitle);
    
        await messagesPage.verifylastMsgInChat(testData.user1.displayName, testData.msgWithSpecialChars);
    });