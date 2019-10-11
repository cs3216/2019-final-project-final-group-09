const router = require('express').Router();
const User = require('../models/user-model');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const jsonParser = bodyParser.json();

//Registration of new local account
router.post("/newAccount", jsonParser, [
    check('name').exists().isLength({ min: 1 }),
    check('email').isEmail(),
    check('password').isLength({ min: 8 })
], (req, res) => {  

    //Check for input errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else {
        //Attempt to register user
        User.register(new User({
            email: req.body.email,
            name: req.body.name,
            permissionLevel: 0,
            participatedEventIds: [],
            subscribedCategories: [],
            profilePicPath: "" //To modify once created
        }),
        req.body.password,
        err => {
            if (err) {
                res.status(400).send({
                  message: err.name
                });
              } else {
                res.status(200).send({
                  message: "OK"
            });
            }
        });
    }
});

module.exports = router;