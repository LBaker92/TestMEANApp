const mongoose = require('mongoose');

const userLoginsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const userLoginsDb = mongoose.connection.useDb('testdb');
const UserLoginInformation = userLoginsDb.model('userlogins', userLoginsSchema);

module.exports = UserLoginInformation;