require('dotenv').config()
const express = require('express');
const qs = require('qs');
const axios = require('axios');
// const cors = require('cors');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const getToken = await axios({
    method: 'post',
    url: 'https://account.kkbox.com/oauth2/token',
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.KKBOX_APP_ID,
      client_secret: process.env.KKBOX_SECRET,
    })
  }).then(async (response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(err => {
    res.send('error: ' + err);
  })
});

module.exports = router;
