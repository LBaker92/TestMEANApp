const express = require('express');
const router = express.Router();

const UserCollection = require('../../models/userSchema');

router.post('/login', async (req, res) => {
  if (!areLoginCredentialsValid(req.body)) {
    return res.status(400)
      .json({ message: 'The username or password was invalid.' });
  }

  await UserCollection.findOne({
    username: req.body.username
  })
    .exec((error, response) => {
      if (error) {
        return res.sendStatus(500);
      }

      if (response) {
        if (response.password === req.body.password) {
          return res.status(200).json(response);
        } else {
          return res.status(404).json('Invalid password entered.');
        }
      }

      return res.status(404).json("Username not found.");
    });
});

function areLoginCredentialsValid(postBody) {
  if (!postBody.username || !postBody.password) {
    return false;
  }

  return true;
}

module.exports = router;