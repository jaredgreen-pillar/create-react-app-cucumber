// import App from "../../src/App";
// import React from "react";
// import {mount} from "enzyme";
import {Given, When, Then} from 'cucumber';
// const App = require('../../src/App')
// const React = require('react');
// const { mount } = require('enzyme');
// const { Given, When, Then } = require('cucumber');

Given(/Input contains (\d+)/, function(input) {
    // const app = mount(<App />);
    // app.find('#input').simulate('change', {target: {value: input}});
    console.log(input);
});

When(/I click submit/, function() {
    console.log('2');
});

Then(/(\w+) is displayed/, function(expectedOutput) {
    console.log(expectedOutput);
});