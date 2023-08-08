const phin = require('phin');
const JokeService = require('../services/joke-service.js');
const jokeService = new JokeService();

const getRandomJoke = async (req,res) => {
    try {
        const userId = req.user.id;
        const response = await jokeService.generateAndStoreJoke(userId);
        return res.status(200).json({
            success:true,
            message:'Joke fetch sucessfully!',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:'There is an error to fetch joke',
            data:{},
            err:error.message,
        });
    }
}

module.exports = {
    getRandomJoke,
};