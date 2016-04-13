'use strict';

var url = require('url');


var Carbrands = require('./CarbrandsService');


module.exports.carbrandsGET = function carbrandsGET (req, res, next) {
  Carbrands.carbrandsGET(req.swagger.params, res, next);
};
