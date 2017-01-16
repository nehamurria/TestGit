var fs = require('fs');  
var async = require('async');

var myFile = 'Desktop/new/click';

async.waterfall([  
    function(callback) {
        fs.readFile(myFile, 'utf8', callback);
    },
    function(txt, callback) {
        txt = txt + '\nAppended something!';
        fs.writeFile(myFile, txt, callback);
    }
], function (err, result) {
    if(err) return console.log(err);
    console.log('waterfall executed');
});

