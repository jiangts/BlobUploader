var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res) {
  res.render('upload');
});

router.post('/upload', function(req, res) {
  //res.send('bounce: ' + JSON.stringify(req.body));
  res.send('Your request headers: ' + JSON.stringify(req.body)
  + '\n\nYour files: ' + JSON.stringify(req.files)
  + '\n\nYour file upload location: /uploads/' + Object.keys(req.files)[0]);
});

router.get('/getBase64', function(req, res) {
  // see http://iandevlin.com/html5/data-uri/audio.php
  // original file http://www.wavsource.com/snds_2014-11-23_3967152387108926/people/famous/edison.wav
  //res.sendfile('public/audio/edison.wav');
  fs.readFile('public/audio/edison.wav', function(err, file) {
    if(err) return res.send(err);
    //header should be: data:audio/wav;base64,
    return res.send(file.toString('base64'));
  });
});

module.exports = router;
