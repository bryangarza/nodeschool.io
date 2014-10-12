var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err)
      return callback(err)
    var data = []
    list.forEach(function(file) {
      if (path.extname(file) === "." + ext)
        data.push(file)
    })
    callback(null, data)
  })
}

// official solution
// solution_filter.js

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
