'use strict';

var url = require('url');


var Offers = require('./OffersService');


module.exports.findPetById = function findPetById (req, res, next) {
  Offers.findPetById(req.swagger.params, res, next);
};

module.exports.offersGET = function offersGET (req, res, next) {
  Offers.offersGET(req.swagger.params, res, next);
};
