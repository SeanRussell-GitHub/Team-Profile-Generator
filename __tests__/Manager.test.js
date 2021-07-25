const {Manager} = require('../index')
const jest = require('jest');
const inquirer = require('inquirer');

describe('Manager Tests', () => {
    it('has a getRole() function', () => {
    
        const karen = new Manager('Karen', 'karen@email.com', '1');
    expect(karen.getRole).toBe('Manager')
        })
    })