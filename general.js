const axios = require('axios');

const getAllBooks = async () => {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
};

const getBookByISBN = async (isbn) => {
    const response = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
    return response.data;
};
const getBooksByAuthor = async (author) => {
    const response = await axios.get(`http://localhost:5000/books/author/${author}`);
    return response.data;
};
const getBooksByTitle = async (title) => {
    const response = await axios.get(`http://localhost:5000/books/title/${title}`);
    return response.data;
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};