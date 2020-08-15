const createTestCafe = require('testcafe');

let testcafe = null;
let runner = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        runner = testcafe.createRunner();

        return runner
			.src([
                "specs.js",
			])
            .browsers(['chrome'])
            .reporter('list')
            .run({skipJsErrors: true, selectorTimeout: 50000});
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    })