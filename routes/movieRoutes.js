const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', (req, res) => {
    res.render('index', { movies: [], movie: null, error: null });
});

router.post('/search', movieController.searchMovies);

router.post('/searchByTitle', movieController.searchMovieByTitle);

module.exports = router;
