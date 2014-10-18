fs = require 'fs'
p = require 'path'
filepath = process.argv[2]
ext = "." + process.argv[3]

fs.readdir filepath, (err, list) ->
  for item in list
    if p.extname item == ext
      console.log item
