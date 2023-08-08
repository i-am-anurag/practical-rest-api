const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/server-config');
const ErrorResponse = require('../utils/error');
const ErrorCodes = require('../utils/status-code');

const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        throw new ErrorResponse(`Email and Password are required`,ErrorCodes.BAD_REQUESET);
    }
    next();
}

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header

    if (!token) {
        throw new ErrorResponse('Token is missing',ErrorCodes.FORBIDDEN);
    }

    jwt.verify(token,JWT_SECRET_KEY, (err, user) => {
        if (err) {
            throw new ErrorResponse("Token is node verfied", ErrorCodes.UNAUTHORIZED);
        }
        req.user = user;
        next();
    });
}

module.exports = {
    validateUserAuth,
    authenticateToken,
}