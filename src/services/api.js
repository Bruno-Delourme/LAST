import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const movieService = {
    getLatestMovies: async () => {
        try {
            const response = await api.get('/movies/latest');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des films:', error);
            throw error;
        }
    },

    getLatestTVShows: async () => {
        try {
            const response = await api.get('/tv/latest');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des séries:', error);
            throw error;
        }
    }
}; 