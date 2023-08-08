const UserService = require('../services/user-service');
const asyncHandler = require('../utils/asyn-handler');

const userService = new UserService();


const signUp = asyncHandler(async (req, res) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const response = await userService.create(userData);

    return res.CREATED(response);
})

const signIn = asyncHandler(async(req,res) => {
    const { email, password } = req.body;
    const token = await userService.signIn(email,password);

    return res.OK(token);
})

const getUserProfile = asyncHandler(async(req, res) => {
    const userId = req.user.id;
    const response = await userService.getUserProfile(userId);

    return res.OK(response);
})

module.exports = {
    signUp,
    signIn,
    getUserProfile,
}