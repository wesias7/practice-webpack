var star = require('./star.js');
var wesias7_star = new star('가을','하늘을 맑다');

console.log(wesias7_star.name);

var request = require('request');
var fs = require('fs');
var md5 = require('md5');
var path = require('path');

request.get('http://expressjs.com', {

}, function(err, res, body){
   fs.mkdir('public/files', function(err, folder){
    fs.access('public/files', function(err){
        if(err){ console.log('could not access files folder. please permission or has folder exists check please.'); return; }
        var create_date = new Date();
        var file = fs.createWriteStream(path.resolve('public/files', md5(create_date.getTime())+'.html'), 'utf8');
        file.write(body);
        file.end();
    });
   });
});