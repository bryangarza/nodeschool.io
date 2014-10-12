var fls = require('./6-modular-module.js')

var dir = process.argv[2]
var ext = process.argv[3]

fls(dir, ext, function(err, data) {
  if (err) throw err

  data.forEach(function (file) {
    console.log(file)
  })
})

// official solution
// solution.js

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
