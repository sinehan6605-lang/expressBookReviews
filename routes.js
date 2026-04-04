const express = require('express');
const router = express.Router();
const books = require('./data');

router.get('/', (req, res) => {
    res.status(200).json({books});
});
router.get('/books/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
});
router.get('/books/author/:author', (req, res) => {
    const author = req.params.author.toLowerCase();

    const result = Object.values(books).filter(book =>
        book.author.toLowerCase() === author
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No books found by this author" });
    }

    res.status(200).json(result);
});
router.get('/books/title/:title', (req, res) => {
    const titleParam = req.params.title.toLowerCase();

    const result = Object.values(books).filter(book =>
        book.title.toLowerCase().includes(titleParam)
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No books found with this title" });
    }

    res.status(200).json(result);
});
router.get('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book.reviews);
});
let users = [];

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    users.push({ username, password });

    res.status(200).json({ message: "User successfully registered" });
});
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
});
router.put('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const { username, review } = req.body;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (!username || !review) {
        return res.status(400).json({ message: "Username and review required" });
    }
    book.reviews[username] = review;

    res.status(200).json({
        message: "Review added/updated",
        reviews: book.reviews
    });
});
router.delete('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const { username } = req.body;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (!username) {
        return res.status(400).json({ message: "Username required" });
    }

    if (!book.reviews[username]) {
        return res.status(404).json({ message: "Review not found for this user" });
    }

    delete book.reviews[username];

    res.status(200).json({ message: "Review deleted" });
});
module.exports = router;