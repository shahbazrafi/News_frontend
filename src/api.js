import axios from "axios"
axios.defaults.baseURL = 'https://nc-news-backend-shahbazrafi.herokuapp.com/api';

export function getArticle(article_id) {
    return axios.get(`/articles/${article_id}`)
}

export function getArticles(params) {
    return axios.get(`/articles`, params)
}

export function getCommentsByArticle(article_id) {
    return axios.get(`/articles/${article_id}/comments`)
}

export function postCommentByArticle(article_id, username, commentInput) {
    return axios.post(`/articles/${article_id}/comments`, {username: username, body: commentInput})
}

export function deleteComment(comment_id) {
    return axios.delete(`/comments/${comment_id}`)
}

export function patchVotesByArticle(article_id, inc_votes) {
    return axios.patch(`/articles/${article_id}`, { inc_votes : inc_votes})
}