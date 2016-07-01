var data = require('../data/data.js');
var activearr = [];

for (var i in data){
  if (data[i].user_data.active === 1){
    activearr.push(data[i]);
  }
}

module.exports = activearr;
