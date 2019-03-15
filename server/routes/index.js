var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post('/upload', function (req, res, next) {
        console.log("Server trying to upload... " + req.files.file.name)
        let uploadFile = req.files.file;
        const fileName = req.files.file.name;
        uploadFile.mv(
            `${__dirname}/../public/files/${fileName}`,
            function (err) {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err)
                }

                res.json({
                    file: `public/${req.files.file.name}`,
                })
            },
        );
    });




module.exports = router;
