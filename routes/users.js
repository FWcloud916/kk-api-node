require('dotenv').config()
var express = require('express');
var router = express.Router();
const qs = require('qs');
const axios = require('axios');

/* GET users listing. */
router.get('/', async (req, res) => {
    const baseUrl = 'https://account.kkbox.com/oauth2/authorize';
    const query = qs.stringify({
      redirect_uri: 'http://localhost:3000',
      client_id: process.env.KKBOX_APP_ID,
      response_type: 'code',
      state: '123',
    })
    res.redirect(baseUrl + '?' + query);
});

module.exports = router;
