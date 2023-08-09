const {Router} = require('express');

const { signUp , signIn, logOut ,getUserProfile} = require('../controller/user-controller');
const { getRandomJoke } = require('../controller/joke-controller');
const {validateUserAuth,authenticateToken} = require('../middleware/Auth-request-validator');

const router = Router();

router.post('/user/signup',validateUserAuth,signUp);
router.post('/user/login',validateUserAuth,signIn);

router.get('/user/me',authenticateToken,getUserProfile);
router.delete('/user/logout',authenticateToken,logOut);
router.get('/random-joke',authenticateToken,getRandomJoke);

module.exports = router;