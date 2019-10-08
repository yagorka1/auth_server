
const express = require('express');
const router = require('express-promise-router')();

const { validateBody, schemas  } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router.route('/singup')
    .post(validateBody(schemas.authSchema), UsersController.singUp);//при переходе на роут вызываем validateBody, if все ок вызываем singUp

router.route('/singin')
    .post(UsersController.singIn);

router.route('/secret')
    .get(UsersController.secret);

module.exports = router;