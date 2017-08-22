//console.log("starting weather.js");

const request = require("request");

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/f925835ee1feab73c4e7489e1e17448b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature, 
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to fetch weather");
        }
    });
};

module.exports.getWeather = getWeather;