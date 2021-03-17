const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  configuration: {
    type: Object,
    required: false
  }
});

const userLoginsDb = mongoose.connection.useDb('testdb');
const UserTable = userLoginsDb.model('users', userSchema);

module.exports = UserTable;