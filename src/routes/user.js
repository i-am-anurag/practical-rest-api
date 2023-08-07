const {Router} = require('express');

const {signUp} = require('../controller/user-controller');
const {validateUserAuth} = require('../middleware/Auth-request-validator');

const router = Router();

router.post('/user/signup',validateUserAuth,signUp);

module.exports = router;