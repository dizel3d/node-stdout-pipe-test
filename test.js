var fs = require('fs');

var received = 0;
var total = 10000;

process.stdin.on('data', function(data) {
  received += data.length;
});

process.on('exit', function() {
  if (received === total) {
    fs.writeSync(1, 'Test completed!\n');
  } else {
    fs.writeSync(2, 'Test failed! Received ' + received + ' symbols, but ' + total + ' expected!\n');
    process.exit(1);
  }
});
