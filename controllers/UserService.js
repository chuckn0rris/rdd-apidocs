'use strict';

exports.userGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "lastName" : "aeiou",
  "country" : "aeiou",
  "zipCode" : "aeiou",
  "city" : "aeiou",
  "address2" : "aeiou",
  "last_login" : "aeiou",
  "address1" : "aeiou",
  "timezone" : "aeiou",
  "link" : "aeiou",
  "avatar" : {
    "owner_id" : 123456789,
    "id" : 123456789,
    "avatar" : "aeiou"
  },
  "socialContacts" : {
    "whatsapp" : "aeiou",
    "skype" : "aeiou",
    "facebook" : "aeiou",
    "instagram" : "aeiou",
    "viber" : "aeiou"
  },
  "firstName" : "aeiou",
  "mobilePhone" : "aeiou",
  "phone" : "aeiou",
  "mapCoordinates" : "aeiou",
  "meta" : "{}",
  "district" : "aeiou",
  "company" : "aeiou",
  "id" : 123456789,
  "date_joined" : "aeiou",
  "email" : "aeiou",
  "publicEmail" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.userPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "lastName" : "aeiou",
  "country" : "aeiou",
  "zipCode" : "aeiou",
  "city" : "aeiou",
  "address2" : "aeiou",
  "last_login" : "aeiou",
  "address1" : "aeiou",
  "timezone" : "aeiou",
  "link" : "aeiou",
  "avatar" : {
    "owner_id" : 123456789,
    "id" : 123456789,
    "avatar" : "aeiou"
  },
  "socialContacts" : {
    "whatsapp" : "aeiou",
    "skype" : "aeiou",
    "facebook" : "aeiou",
    "instagram" : "aeiou",
    "viber" : "aeiou"
  },
  "firstName" : "aeiou",
  "mobilePhone" : "aeiou",
  "phone" : "aeiou",
  "mapCoordinates" : "aeiou",
  "meta" : "{}",
  "district" : "aeiou",
  "company" : "aeiou",
  "id" : 123456789,
  "date_joined" : "aeiou",
  "email" : "aeiou",
  "publicEmail" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

