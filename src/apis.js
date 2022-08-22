import axios from 'axios';

export const getReviews = () => {
    return axios.get('https://neat-games.herokuapp.com/api/reviews');
};

export const getCategories = () => {
    return axios.get('https://neat-games.herokuapp.com/api/categories');
};

export const getReviewsByCategory = (category) => {
    return axios.get(`https://neat-games.herokuapp.com/api/reviews?category=${category}`);
};

export const getReviewById = (id) => {
    return axios.get(`https://neat-games.herokuapp.com/api/reviews/${id}`);
};