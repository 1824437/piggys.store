const express = require('express');
const router = express.Router();

const index = require(`${_root}/biz/index`);
router.get('/', index);

const movies = require(`${_root}/biz/api/movies`);
router.get('/api/movies/', movies);

module.exports = router;
