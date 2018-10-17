describe('queue', function () {
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  it('should have methods "enqueue" and "dequeue"', function() {
    expect(queue.enqueue).to.be.a('function')
    expect(queue.dequeue).to.be.a('function')
  })

  it('removes the least recently added of two items', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('a');
  });

  it('removes the oldest item, after newer items have already been added and removed', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).to.equal('b');
  });

});
