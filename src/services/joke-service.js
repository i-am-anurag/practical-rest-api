const phin = require('phin');
const UserRepository = require('../repository/user-repository');
const {User} = require('../models/index')

class JokeService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async storeJoke(userId,jokeContent){
        try {
            const user = await this.userRepo.getUserById(userId, ['id','jokes']);
            if (user) {
                user.jokes = user.jokes || [];
                user.jokes.push(jokeContent);
                console.log(user.jokes);
                await User.update({ jokes: user.jokes }, { where: { id: userId } });
            }   
        } catch (error) {
            console.log("There was an issue with saving your joke");
            throw{ message: 'Error while saving joke'};
        }
    }

    async getJokes(userId) {
        try {
            const response = await phin({
                url: 'https://api.chucknorris.io/jokes/random',
                parse: 'json'
            });
            const jokeContent = response.body.value;
            await this.storeJoke(userId,jokeContent);

            return jokeContent;
        } catch (error) {
            console.log(error.message);
            throw{ message: 'Error while fetching jokes'};
        }
    }
}

module.exports = JokeService;