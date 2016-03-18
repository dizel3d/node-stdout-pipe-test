# Node.js stdout pipe test

[![Build Status](https://ci.appveyor.com/api/projects/status/github/dizel3d/node-stdout-pipe-test)](https://ci.appveyor.com/project/dizel3d/node-stdout-pipe-test)

There are two Node.js scripts:
- **print.js** writes symbol `0` to stdout N times through `process.stdout.write` and immediately finishes calling `process.exit(0)`
- **test.js** reads stdin and checks that N symbols has been received before exit

Test should be failed on **Windows** with node < v0.11.12.
```
> nvm install 0.11.11
> nvm use 0.11.11
> node print | node test
Test failed! Received 132 symbols, but 10000 expected!
```

And should be completed since node >= v0.11.12.
```
> nvm install 0.11.12
> nvm use 0.11.12
> node print | node test
Test completed!
```

See [nodejs v0.11.12 (2014.03.11) changelog](https://github.com/nodejs/node-v0.x-archive/blob/v0.11.12/ChangeLog):
*windows: make stdout/sterr pipes blocking (Alexis Campailla)*
