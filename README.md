# Node.js stdout pipe test

There are two Node.js scripts:
- **print.js** writes symbol `0` to stdout N times through `process.stdout.write` and immediately finishes calling `process.exit(0)`
- **test.js** reads stdin and checks that N symbols has been received before exit

Scripts are connected by pipe: `node print | node test`
