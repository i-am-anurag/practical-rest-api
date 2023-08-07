const phin = require('phin');
const JokeService = require('../services/joke-service');
const jokeService = new JokeService();

const getRandomJoke = async (req,res) => {
    try {
        const response = await phin({
            url: 'https://api.chucknorris.io/jokes/random',
            parse: 'json'
        });

        const joke = response.body.value;

        return res.status(200).json({
            success:true,
            message:'Joke fetch sucessfully!',
            joke,
            err:{}
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:'There is an error to fetch joke',
            data:joke,
            err:{}
        });
    }
}

module.exports = {
    getRandomJoke,
};