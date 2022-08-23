import axios from 'axios';

export const getReviews = (sortBy = "created_at", order = "DESC") => {
        console.log(sortBy, order, "in API")
        return axios.get(`https://neat-games.herokuapp.com/api/reviews?sort_by=${sortBy}&order=${order}`);
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

export const addVote = (id, vote) => {
    return axios.patch(`https://neat-games.herokuapp.com/api/reviews/${id}`, {inc_votes: vote});
};

export const getCommentsById = (id) => {
    return axios.get(`https://neat-games.herokuapp.com/api/reviews/${id}/comments`);
};

export const postComment = (id, username, body) => {
    console.log(id, username, body);
    return axios.post(`https://neat-games.herokuapp.com/api/reviews/${id}/comments`, {username, body})
};