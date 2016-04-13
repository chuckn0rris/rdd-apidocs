'use strict';

exports.findPetById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "ownerUser" : {
    "firstName" : "aeiou",
    "lastName" : "aeiou",
    "mapCoordinates" : "aeiou",
    "district" : "aeiou",
    "link" : "aeiou",
    "company" : "aeiou",
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
    }
  },
  "Object" : {
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
  }
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.offersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "next" : 1.3579000000000001069366817318950779736042022705078125,
  "previous" : 1.3579000000000001069366817318950779736042022705078125,
  "count" : 1.3579000000000001069366817318950779736042022705078125,
  "results" : [ {
    "ownerUser" : {
      "firstName" : "aeiou",
      "lastName" : "aeiou",
      "mapCoordinates" : "aeiou",
      "district" : "aeiou",
      "link" : "aeiou",
      "company" : "aeiou",
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
      }
    },
    "Object" : {
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
    }
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

