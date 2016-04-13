'use strict';

exports.findOwnerById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = [ {
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
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

