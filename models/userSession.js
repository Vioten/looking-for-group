var bookshelf = require('../db/bookshelf');

require('./session');
require('./user');

var UserSession = bookshelf.Model.extend({
  tableName:'user_sessions',
  user(){
    return this.belongsToMany('User');
  },
  session(){
    return this.belongsToMany('Session');
  }
});

module.exports = bookshelf.model('UserSession', UserSession);
