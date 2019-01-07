const { Given, When, Then } = require('cucumber')

Given(/Input contains (\d+)/, function(input) {
    console.log(input);
});

When(/I click submit/, function() {
    console.log('2');
});

Then(/(\w+) is displayed/, function(expectedOutput) {
    console.log(expectedOutput);
});