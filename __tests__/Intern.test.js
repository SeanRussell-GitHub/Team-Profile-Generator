const { Intern } = require('../empHandlr');

describe('Intern Tests', () => {
    it('has a getRole() function', () => {
        const karen = new Intern('Karen', 'karen@email.com', '1', 'Intern');
        expect(karen.getRole()).toBe('Intern')
    })
})
