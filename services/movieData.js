const movieModule = require('./path/to/your/module');

const searchQuery = 'batman'; // Ensure this is not empty
const title = 'The Dark Knight'; // Ensure this is not empty

(async () => {
    try {
        const movies = await movieModule.fetchMovies(searchQuery);
        console.log('Movies:', movies);

        const movieDetails = await movieModule.fetchMovieByTitle(title);
        console.log('Movie Details:', movieDetails);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
