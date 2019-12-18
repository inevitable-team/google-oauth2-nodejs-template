const router = require('express').Router();
const User = require('../models/user-model');

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.user, error: null });
});

router.post('/', authCheck, (req, res) => {
    let updatedUser = req.user;
    // Update details from body POST
    if (req.body.name) updatedUser.name = req.body.name;

    // Push Updated User
    User.findOneAndUpdate({ email: req.user.email }, updatedUser, {upsert: true, useFindAndModify: false }, function(err, doc) {
        res.render('profile', { user: updatedUser, error: err ? err : null });
    });

})

module.exports = router;
