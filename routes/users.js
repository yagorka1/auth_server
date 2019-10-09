
const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require ('../passport');
const { validateBody, schemas  } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router.route('/singup')
    .post(validateBody(schemas.authSchema), UsersController.singUp); //при переходе на роут вызываем validateBody, if все ок вызываем singUp

router.route('/singin')
    .post(validateBody(schemas.authSchema), passport.authenticate('local', { session: false }), UsersController.singIn);

router.route('/secret')
    .get(passport.authenticate('jwt', { session: false }), UsersController.secret);

module.exports = router;