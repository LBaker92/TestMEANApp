const express = require('express');
const router = express.Router();

const UserCollection = require('../../models/userSchema');

router.post('/config', async (req, res) => {
  const query = { 
    username: req.body.username
  };
  const operation = { 
    $set: {
      configuration: req.body.configuration
    }
  };
  const options = {
    new: true
  };

  await UserCollection.findOneAndUpdate(query, operation, options, async (error, response) => {
    if (error) {
      return res.sendStatus(500);
    }

    if (response) {
      const sanizitedResponse = {
        username: response.username,
        configuration: response.configuration
      };

      return res.status(200).json(sanizitedResponse);
    }
  });
});

module.exports = router;