var axios = require('axios');

var API_KEY = 'fb9ceb92233d24c1aa971728512d1cd0';
var units = 'metric'

var api = {
  getCurrentWeather: function(city){
    var url =  'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate' + '&units=' + units;
    if (API_KEY) { url += '&APPID=' + API_KEY; }
    return axios.get(url);
  },
  getForecast: function(city){
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&cnt=5' + '&units=' + units;
    if (API_KEY) { url += '&APPID=' + API_KEY; }
    return axios.get(url);
  }
};

module.exports = api;
