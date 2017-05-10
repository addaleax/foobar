const cp = require('child_process');

if (process.argv[2] === 'child') {
console.log('g'.repeat(8193).toString());
}
else {
const child = cp.spawn(process.execPath, [__filename, 'child']);
  child.stdout.on('data', function(d) {
    console.log(`${d.length}:X${d}Z`);
  });
}
