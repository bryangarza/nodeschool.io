fs = require 'fs'

buf = fs.readFileSync process.argv[2], 'utf8'
lines = buf
  .split "\n"
  .length - 1

console.log(lines)
