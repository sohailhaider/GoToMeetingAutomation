import * as testData from './testdata.json';
import loginPage from './page-models/login.page';
import messagesPage from './page-models/messages.page';

fixture `Verify Send and Receive P2P messages`
    .page `${testData.webUrl}`;

test("Login User", async t  => {
    await loginPage.loginUser(testData.user1.email, testData.user1.password);

    await messagesPage.openChatRoomWith(testData.user2.displayName);
})
