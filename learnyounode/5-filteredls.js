var fs = require('fs')
var p = require('path')
var filepath = process.argv[2]
var ext = "." + process.argv[3]

fs.readdir(filepath, function(err, list) {
  for (i = 0; i < list.length; i++) {
    if (p.extname(list[i]) === ext)
      console.log(list[i])
  }
})
