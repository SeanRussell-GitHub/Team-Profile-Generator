const {Manager} = require('../index')

describe('Manager Tests', () => {
    it('has a getRole() function', () => {
    
        const karen = new Manager('Karen', 'karen@email.com', '1');
    expect(karen.getRole).toBe('Manager')
        })
    })