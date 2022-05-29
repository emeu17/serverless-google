'use strict';
//
// exports.http = (request, response) => {
//   response.status(200).send('Hello World!');
// };


exports.first = (request, response) => {
    response.status(200).send('Hello first!');
};


exports.test = (request, response) => {
    response.status(200).send('This is a test route on Google Cloud!');
};

exports.event = (event, callback) => {
  callback();
};
