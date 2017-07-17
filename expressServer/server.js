/**
 * Created by anjum on 17/07/17.
 */
var express = require('express'),
  app = express(),
  faker = require('faker');

app.set('port', process.env.PORT || 4372);


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


app.get('/api', function(req, res) {
  var data = generateUsers();
  res.json(data)
});
var server = app.listen(app.get('port'), function() {
  console.log('Server up: http://localhost:' + app.get('port'));
});
