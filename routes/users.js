const express = require('express');
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');

router.route('/singup')
    .post(UsersController.singUp);

router.route('/singin')
    .post(UsersController.singIn);

router.route('/secret')
    .get(UsersController.secret);

module.exports = router;