const { Employee } = require('../empHandlr');

describe('Employee Tests', () => {
    it('has a getRole() function', () => {
        const karen = new Employee('Karen', 'karen@email.com', '1', 'Employee');
        expect(karen.getRole()).toBe('Employee')
    })
})
