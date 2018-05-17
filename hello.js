var request = require('request');
var fs = require('fs');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

function hello () {
  // this says hello
  
  console.log('Hello World');
}

function narf () {
  
}

module.exports = saveWebPage;