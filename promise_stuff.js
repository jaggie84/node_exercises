var axios = require("axios");
var Promise = require("bluebird");

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Hello');
  }, 8000);
});

p
  .then(function (value) {
    console.log('DONE: ', value);
  })
  .catch(function (error) {
    console.error('ERROR', error);
  });

var api_url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

// axios.get(api_url)
//   .then(function (response) {
//     console.log(response.data[1].name);
//     console.log(response.data[1].food_pairing);
//     return axios.get(api_url);
//   })
//   .then(function (response2) {
//     console.log(response2.data[0].name);
//     return response2.data;
//   })
//   .then(function (data) {
//     console.log(data[0].name);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
  
var p1 = axios.get(api_url);
var p2 = axios.get(api_url);

Promise.all([p1, p2])
  .then(function (responses) {
    console.log(responses[0].data[0].name);
    console.log(responses[1].data[0].name);
  });

function fix_name (name) {
  var promise = new Promise(function (resolve, reject) {
    try {
      var new_name = name.replace('-', ' ');
      resolve(new_name);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

fix_name(['Paul-Bailey'])
  .then(function (name) {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })