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

    return res.CREATED(response,"User created sucessfully");
})

const signIn = asyncHandler(async(req,res) => {
    const { email, password } = req.body;
    const token = await userService.signIn(email,password);

    return res.OK(token,"User signed in sucessfully");
})

const getUserProfile = asyncHandler(async(req, res) => {
    const userId = req.user.id;
    const response = await userService.getUserProfile(userId);

    return res.OK(response,"Fetch User Profile Successfully");
});

const logOut = asyncHandler(async(req, res) => {
    const userId = req.user.id;
    const response = await userService.userLogout(userId);

    return res.OK(response,"User logged out sucessfully");
});

module.exports = {
    signUp,
    signIn,
    getUserProfile,
    logOut,
}