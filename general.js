const axios = require('axios');

const getAllBooks = async () => {
    try {
        const response = await axios.get('http://localhost:5000/');
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};

const getBookByISBN = async (isbn) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};
const getBooksByAuthor = async (author) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/author/${author}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};
const getBooksByTitle = async (title) => {
    try {
        const response = await axios.get(`http://localhost:5000/books/title/${title}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};