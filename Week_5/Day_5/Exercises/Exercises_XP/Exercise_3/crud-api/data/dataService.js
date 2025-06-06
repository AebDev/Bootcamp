const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {
    try {
        const response = await axios.get(url);
        if (!response.status == 200) {
            throw new Error('Something went wrong');
        }
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = fetchPosts;