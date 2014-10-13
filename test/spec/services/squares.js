'use strict';

describe('Service: squares', function () {

  // load the service's module
  beforeEach(module('tictactoeApp'));

  // instantiate service
  var squares;
  beforeEach(inject(function (_squares_) {
    squares = _squares_;
  }));

  it('should do something', function () {
    expect(!!squares).toBe(true);
  });

});
