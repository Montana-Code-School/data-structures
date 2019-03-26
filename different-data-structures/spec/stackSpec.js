describe('stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  it('should have methods "push" and "pop"', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
  });

  it('removes the most recently added of two items', function () {
    stack.push('a');
    stack.push('b');
    expect(stack.pop()).to.equal('b');
  });

  it('removes the newest item, after newer items have already been added and removed', function () {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.pop()).to.equal('b');
  });

});
