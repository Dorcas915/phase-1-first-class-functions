// Receives a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// Returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    // Named function body (can be empty)
  };
}

// Returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    // Anonymous function body (can be empty)
  };
}
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};

