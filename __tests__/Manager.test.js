describe('Manager Tests', () => {
    it('has a name', () => {
    const karen = new Manager('Karen', 'karen@email.com', '1');
    expect(karen.name).toEqual('Karen')
        })
    })