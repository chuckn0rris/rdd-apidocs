'use strict';

var url = require('url');


var Transport = require('./TransportService');


module.exports.findPhotoTransportByOwnerIdAndTrasportId = function findPhotoTransportByOwnerIdAndTrasportId (req, res, next) {
  Transport.findPhotoTransportByOwnerIdAndTrasportId(req.swagger.params, res, next);
};

module.exports.findTransportByOwnerId = function findTransportByOwnerId (req, res, next) {
  Transport.findTransportByOwnerId(req.swagger.params, res, next);
};

module.exports.findTransportByOwnerIdAndTrasportId = function findTransportByOwnerIdAndTrasportId (req, res, next) {
  Transport.findTransportByOwnerIdAndTrasportId(req.swagger.params, res, next);
};

module.exports.ownersOwnerIdTransportsPOST = function ownersOwnerIdTransportsPOST (req, res, next) {
  Transport.ownersOwnerIdTransportsPOST(req.swagger.params, res, next);
};
