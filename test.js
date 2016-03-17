var received = 0;
var total = 10000;

process.stdin.on('data', function(data) {
  received += data.length;
});

process.on('exit', function() {
  if (received === total) {
    process.stdout.write('Test completed!');
  } else {
    process.stderr.write('Test failed! Received ' + received + ' symbols, but ' + total + ' expected!');
    process.exit(1);
  }
});
