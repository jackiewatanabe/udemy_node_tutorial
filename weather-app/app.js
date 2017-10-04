const request = require('request');

request({
  url: `https://api.darksky.net/forecast/30def0a49781bd8b32da881febb3c8ee/37.8267,-122.4233`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 400){
    console.log(body.error);
  } else if (!error && response.statusCode === 200){
    console.log(JSON.stringify(body.currently.temperature, null, 2));
  } else {
    console.log('Unable to fetch weather');
  }
});
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// // console.log(argv);
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
