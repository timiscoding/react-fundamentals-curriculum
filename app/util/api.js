var axios = require('axios');

var _base_url = 'http://api.openweathermap.org/data/2.5/';
var API_KEY = 'fb9ceb92233d24c1aa971728512d1cd0';

function getQueryStringParams(city){
  return {
    q: city,
    type: 'accurate',
    units: 'metric',
    cnt: '5',
    APPID: API_KEY
  };
}

function createQueryString(params){
  return '?' + Object.keys(params).map(function(key){
    return key + '=' + params[key];
  }).join('&');
}

function getCurrentWeather(city){
  var params =  getQueryStringParams(city);
  var queryStr = createQueryString(params);
  console.log(queryStr);
  axios.get(_base_url + 'weather' + queryStr)
    .then(function(weather){
      console.log('weather', weather.data);
    })
    .catch(function(err){
      console.log('error getting weather', err);
    });
}

function getForecast(city){
  var params =  getQueryStringParams(city);
  var queryStr = createQueryString(params);
  return axios.get(_base_url + 'forecast/daily' + queryStr)
    .then(function(weather){
      return weather.data;
    })
    .catch(function(err){
      console.log('error getting forecast', err);
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};
