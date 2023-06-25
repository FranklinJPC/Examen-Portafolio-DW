const Handlebars = require('handlebars');
const User = require('../models/User')

Handlebars.registerHelper('viewUser', function (id) {
    return User.findById(_id).then((users) => {
      if (users) {
        return users.name;
      } else {
        return 'error';
      }
    });
  });

module.exports = Handlebars;

  