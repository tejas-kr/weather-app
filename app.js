const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const place_name = process.argv[2];

if (place_name === undefined) {
    return console.log('Please enter place name (location) to continue!');
} 

geocode(place_name, (err, data) => {

    if (err) {
        return console.log(err);
    }

    forecast(data.letitude, data.longitude, (error, foreCastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        console.log(data.location);
        console.log(foreCastData);
    });
});