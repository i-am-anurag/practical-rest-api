const {Router} = require('express');

const { signUp , signIn, signOut ,getUserProfile} = require('../controller/user-controller');
const {validateUserAuth,authenticateToken} = require('../middleware/Auth-request-validator');

const router = Router();

router.post('/user/signup',validateUserAuth,signUp);
router.post('/user/login',validateUserAuth,signIn);

router.get('/user/me',authenticateToken,getUserProfile);

module.exports = router;