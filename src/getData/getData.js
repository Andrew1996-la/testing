const axios = module.require('axios');
const arrNumberToString = module.require('../arrNumberToString/arrNumberToString');

const getData = async () => {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const postsIds = posts.data.map(item => item.id)
        return arrNumberToString(postsIds);
    } catch (e) {
        throw new Error(`${e.message}`);
    }
}

module.exports = getData;