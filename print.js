for (var i = 0; i < 10000; ++i) {
    process.stdout.write('0');
}

setTimeout(function() {
    process.exit(0);
}, 0);
