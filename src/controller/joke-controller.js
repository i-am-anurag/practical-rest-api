const JokeService = require('../services/joke-service.js');
const jokeService = new JokeService();
const asyncHandler = require('../utils/asyn-handler.js')

const getRandomJoke = asyncHandler(async (req,res) => {
    const userId = req.user.id;
    const response = await jokeService.getJokes(userId);

    return res.OK(response);
});

module.exports = {
    getRandomJoke,
};