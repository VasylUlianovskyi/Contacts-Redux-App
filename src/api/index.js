import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => httpClient.get('/posts');

export const getUsers = () => httpClient.get('/users');
