const { apiUrl, apiKey } = require('../config');

module.exports.fetchMovies = async (searchQuery) => {
    try {
        if (!searchQuery || searchQuery.trim() === '') {
            return []; 
        }
        const response = await fetch(`${apiUrl}?s=${searchQuery}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === 'True') {
            return data.Search;
        } else {
            throw new Error('Error fetching movies: ' + data.Error);
        }
    } catch (error) {
        throw new Error('Error fetching movies');
    }
};

module.exports.fetchMovieByTitle = async (title) => {
    try {
        if (!title || title.trim() === '') {
            return null; 
        }
        const response = await fetch(`${apiUrl}?t=${title}&apikey=${apiKey}`);
        const data = await response.json();


        if (data.Response === 'True') {
            return data;
        } else {
            throw new Error('Error fetching movie details: ' + data.Error);
        }
    } catch (error) {
        throw new Error('Error fetching movie details');
    }
};
