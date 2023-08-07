const {Router} = require('express');

const { signUp , signIn } = require('../controller/user-controller');
const {validateUserAuth} = require('../middleware/Auth-request-validator');

const router = Router();

router.post('/user/signup',validateUserAuth,signUp);
router.post('/user/login',validateUserAuth,signIn)

module.exports = router;