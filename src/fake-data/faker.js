/**
 * Created by anjum on 17/07/17.
 */

'use strict';

var faker = require('faker');

function generateUsers() {
  var users = [];

  for (var id = 0; id < 50; id++) {
    var name = faker.name.findName();
    var email = faker.internet.email();
    var phoneNumber = faker.phone.phoneNumberFormat();
    var policyNumber = faker.random.number(123456789);

    users.push({
      "id": id,
      "name": name,
      "email": email,
      "phoneNumber": phoneNumber,
      "policyNumber": policyNumber
    })
  }

  return {"users": users}

}


module.exports = generateUsers;
