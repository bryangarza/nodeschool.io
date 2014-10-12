var fs = require('fs')
var path = require('path')

exports.filteredls = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    list.forEach(function(file) {
      if (path.extname(file) === "." + ext)
        console.log(file)
    })
  })
}
