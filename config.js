require('dotenv').config();


module.exports = {
    apiUrl:process.env.API_URL,
    apiKey: process.env.API_KEY,
    port: process.env.PORT || 3000
};
