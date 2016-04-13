'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.userGET = function userGET (req, res, next) {
  User.userGET(req.swagger.params, res, next);
};

module.exports.userPUT = function userPUT (req, res, next) {
  User.userPUT(req.swagger.params, res, next);
};
