/**
 * Created by Sarge on 7/23/2017.
 */
var express = require('express');
var fs= require('fs');
var router = express.Router();

const testFolder = './movies';

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}
var movies=getFiles(testFolder);

/* GET fileFounds page. */
router.get('/', function(req, res, next) {


    res.render('filesFound', {
        title: 'Christian hello world!',
        movie:movies
    });

});

module.exports = router;