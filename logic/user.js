var data = require('../data/data.js');

function getUser(userw){
  var userdata;
for (var i in data){
  if (data[i].user_data.last_name === userw){
    userdata = data[i];
    }
  }
  return userdata;
}

module.exports = getUser;
