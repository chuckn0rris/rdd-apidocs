'use strict';

var url = require('url');


var Owner = require('./OwnerService');


module.exports.findOwnerById = function findOwnerById (req, res, next) {
  Owner.findOwnerById(req.swagger.params, res, next);
};
