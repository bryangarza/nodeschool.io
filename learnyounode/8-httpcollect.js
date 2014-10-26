var http = require('http')
var buf = require('buffer')

var str = ''

callback = function(response) {
  response.setEncoding('utf8')

  response.on('data', function(chunk) {
    str += chunk
  })

  response.on('error', function(e) {
    console.log("Got error: " + e.message)
  })

  response.on('end', function() {
    console.log(str.length);
    console.log(str)
  })
}

var req = http.get(process.argv[2], callback)

// Official solution
//
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
