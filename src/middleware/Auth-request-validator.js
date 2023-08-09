const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/server-config');
const { User } = require('../models');
const ErrorResponse = require('../utils/error');
const ErrorCodes = require('../utils/status-code');
const asyncHandler = require('../utils/asyn-handler');

const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        throw new ErrorResponse(`Email and Password are required`,ErrorCodes.BAD_REQUESET);
    }
    next();
}

const authenticateToken = asyncHandler(async(req, res,next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header
    
    if (!token) {
        throw new ErrorResponse('Token is missing',ErrorCodes.FORBIDDEN);
    }

    const user = await User.findOne({where: {token: token}});

    if(!user) {
        throw new ErrorResponse("Unauthorized: Invalid token", ErrorCodes.UNAUTHORIZED);
    }

    jwt.verify(token,JWT_SECRET_KEY, (err, user) => {
        if (err) {
            throw new ErrorResponse("Unauthorized: Invalid token", ErrorCodes.UNAUTHORIZED);
        }
        req.user = user;
        next();
    });
})

module.exports = {
    validateUserAuth,
    authenticateToken,
}