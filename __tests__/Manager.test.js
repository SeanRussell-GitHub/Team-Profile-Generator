const { Manager } = require('../empHandlr');

describe('Manager Tests', () => {
    it('has a getRole() function', () => {

        const karen = new Manager('Karen', 'karen@email.com', '1', 'Manager');
        expect(karen.getRole()).toBe('Manager')
    })
})