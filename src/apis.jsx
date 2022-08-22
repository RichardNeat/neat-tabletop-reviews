import axios from 'axios';

export const getReviews = () => {
    return axios.get('https://neat-games.herokuapp.com/api/reviews');
};

export const getCategories = () => {
    return axios.get('https://neat-games.herokuapp.com/api/categories');
};