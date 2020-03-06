const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGphbmdvZHVkZSIsImEiOiJjazdjMDVnc20wMm50M2hvNTFlenRnNXdqIn0.6pqPAxKEho55g3xoyTMDXg';

    request({
        url: url,
        json: true
    }, (err, resp) => {
        if (err) {
            callback('Unable to connect', undefined);
        } else if (resp.body.features.length === 0) {
            callback('Unable to find the location. Try different search', undefined);
        } else {
            callback(undefined, {
                longitude: resp.body.features[0].geometry.coordinates[0],
                letitude: resp.body.features[0].geometry.coordinates[1],
                location: resp.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;