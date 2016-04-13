'use strict';

exports.findPhotoTransportByOwnerIdAndTrasportId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * ownerId (Long)
  * transportId (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "owner_id" : 123456789,
  "transport_id" : 123456789,
  "photo" : "aeiou",
  "id" : 123456789
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.findTransportByOwnerId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * ownerId (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "owner" : "aeiou",
  "isAvailable" : "aeiou",
  "color" : "aeiou",
  "transportId" : "aeiou",
  "year" : "",
  "description" : "aeiou",
  "creation_date" : "aeiou",
  "isActive" : "aeiou",
  "photos" : [ {
    "owner_id" : 123456789,
    "transport_id" : 123456789,
    "photo" : "aeiou",
    "id" : 123456789
  } ],
  "complectation" : "aeiou",
  "availableFrom" : "aeiou",
  "url" : "aeiou",
  "atype" : "aeiou",
  "meta" : "{}",
  "model" : "aeiou",
  "id" : 123456789,
  "availableNow" : "aeiou",
  "prices" : "{}",
  "brand" : "aeiou",
  "modify_date" : "aeiou",
  "mileage" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.findTransportByOwnerIdAndTrasportId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * ownerId (Long)
  * transportId (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "owner" : "aeiou",
  "isAvailable" : "aeiou",
  "color" : "aeiou",
  "transportId" : "aeiou",
  "year" : "",
  "description" : "aeiou",
  "creation_date" : "aeiou",
  "isActive" : "aeiou",
  "photos" : [ {
    "owner_id" : 123456789,
    "transport_id" : 123456789,
    "photo" : "aeiou",
    "id" : 123456789
  } ],
  "complectation" : "aeiou",
  "availableFrom" : "aeiou",
  "url" : "aeiou",
  "atype" : "aeiou",
  "meta" : "{}",
  "model" : "aeiou",
  "id" : 123456789,
  "availableNow" : "aeiou",
  "prices" : "{}",
  "brand" : "aeiou",
  "modify_date" : "aeiou",
  "mileage" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.ownersOwnerIdTransportsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * ownerId (Long)
  * object (Transports)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "owner" : "aeiou",
  "isAvailable" : "aeiou",
  "color" : "aeiou",
  "transportId" : "aeiou",
  "year" : "",
  "description" : "aeiou",
  "creation_date" : "aeiou",
  "isActive" : "aeiou",
  "photos" : [ {
    "owner_id" : 123456789,
    "transport_id" : 123456789,
    "photo" : "aeiou",
    "id" : 123456789
  } ],
  "complectation" : "aeiou",
  "availableFrom" : "aeiou",
  "url" : "aeiou",
  "atype" : "aeiou",
  "meta" : "{}",
  "model" : "aeiou",
  "id" : 123456789,
  "availableNow" : "aeiou",
  "prices" : "{}",
  "brand" : "aeiou",
  "modify_date" : "aeiou",
  "mileage" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

