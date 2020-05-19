var express = require('express');
var router = express.Router();
var Info = require('../models/infos');

/* GET home page. */
router.get('/', function (req, res, next) {
    Info.find(function (err, docs) {

        res.render('movies/index', { title: 'MovieGen', infos: docs });
    });           
});

module.exports = router;
