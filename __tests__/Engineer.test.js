const { Engineer } = require('../empHandlr');

describe('Engineer Tests', () => {
    it('has a getRole() function', () => {
        const karen = new Engineer('Karen', 'karen@email.com', '1', 'Engineer');
        expect(karen.getRole()).toBe('Engineer')
    })
})
