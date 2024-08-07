const movieService = require('../services/movieService');

module.exports.searchMovies = async (req, res) => {
    const searchQuery = req.body.searchQuery;
    try {
        const movies = await movieService.fetchMovies(searchQuery);
        console.log("movie by search", movies);
        res.render('index', { movies, movie: null, error: null });
    } catch (error) {
        res.render('index', { movies: [], movie: null, error: error.message });
    }
};

module.exports.searchMovieByTitle = async (req, res) => {
    const title = req.body.title;
    try {
        const movie = await movieService.fetchMovieByTitle(title);
        console.log("movie by title", movie);
        res.render('index', { movies: [], movie, error: null });
    } catch (error) {
        res.render('index', { movies: [], movie: null, error: error.message });
    }
};
