const express = require('express');
const router = express.Router();


//Get all the users with occupation
router.get('/users', function(req, res) {
    console.log(req.body);
    res.send({
        type:'GET',
        name: req.body.name,
        job: req.body.job
    });
});

//Add new user
router.post('/users', function(req, res) {

    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name,
        job: req.body.job
    });
});

//Update the user
router.put('/users/:id', function(req, res) {

    res.send({type:'PUT'});
});

//Delete the user
router.delete('/users/:id', function(req, res) {

    res.send({type:'DELETE'});
});



module.exports = router;