import axios from 'axios';

export const getReviews = (sortBy = "created_at", order = "DESC", p = 1, limit = 10) => {
    if (limit === 0) limit = 10;
    return axios.get(`https://neat-games.onrender.com/api/reviews?sort_by=${sortBy}&order=${order}&limit=${limit}&p=${p}`);
};

export const getCategories = () => {
    return axios.get('https://neat-games.onrender.com/api/categories');
};

export const getReviewsByCategory = (category) => {
    return axios.get(`https://neat-games.onrender.com/api/reviews?category=${category}`);
};

export const getReviewById = (id) => {
    return axios.get(`https://neat-games.onrender.com/api/reviews/${id}`);
};

export const addVote = (id, vote, comment_id) => {
    if (comment_id) {
        return axios.patch(`https://neat-games.onrender.com/api/comments/${comment_id}`, {inc_vote: vote});
    } else {
        return axios.patch(`https://neat-games.onrender.com/api/reviews/${id}`, {inc_votes: vote});
    };
};

export const getCommentsById = (id, page) => {
    return axios.get(`https://neat-games.onrender.com/api/reviews/${id}/comments?p=${page}`);
};

export const postComment = (id, username, body) => {
    return axios.post(`https://neat-games.onrender.com/api/reviews/${id}/comments`, {username, body})
};

export const deleteComment = (id) => {
    return axios.delete(`https://neat-games.onrender.com/api/comments/${id}`);
};

export const getUsers = () => {
    return axios.get('https://neat-games.onrender.com/api/users');
};

export const postReview = (owner, title, review_body, designer, category) => {
    return axios.post("https://neat-games.onrender.com/api/reviews", {owner, title, review_body, designer, category});
};

export const deleteReview = (id) => {
    return axios.delete(`https://neat-games.onrender.com/api/reviews/${id}`);
};

export const postUser = (username, name, avatar_url) => {
    return axios.post('https://neat-games.onrender.com/api/users', {username, name, avatar_url});
};

export const deleteUser = (username) => {
    return axios.delete(`https://neat-games.onrender.com/api/users/${username}`);
};
