import axios from 'axios';

// Création de l'instance axios
const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Optionnel : Intercepteurs pour le logging
api.interceptors.request.use(request => {
    console.log('Requête envoyée:', request);
    return request;
});

api.interceptors.response.use(
    response => {
        console.log('Réponse reçue:', response);
        return response;
    },
    error => {
        console.error('Erreur API:', error);
        return Promise.reject(error);
    }
);

// Export des méthodes du service
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