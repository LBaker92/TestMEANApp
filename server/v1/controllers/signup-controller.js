const express = require('express');
const router = express.Router();

const UserLoginInformation = require('../../models/user-login');

router.post('/signup', async (req, res) => {
  if (usernameAndPasswordExists(req.body)) {
    await UserLoginInformation.create(req.body, (err, user) => {
      if (err) {
        if (err.code === 11000)
          return res.status(409).send('User already exists.');
      }

      return res.status(200).json(user);
    })
  }
})

function usernameAndPasswordExists(postBody) {
  if (!postBody.username || !postBody.password) {
    return false;
  }

  return true;
}

module.exports = router;