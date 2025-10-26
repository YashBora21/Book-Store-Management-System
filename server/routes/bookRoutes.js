const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

// @desc    Fetch all books
// @route   GET /api/books
// @access  Public
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Fetch single book
// @route   GET /api/books/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a book
// @route   POST /api/books
// @access  Private/Admin
router.post('/', async (req, res) => {
  try {
    const { 
      title, 
      author, 
      price, 
      originalPrice, 
      category, 
      isbn, 
      length, 
      published, 
      description, 
      coverImage 
    } = req.body;

    const book = new Book({
      title,
      author,
      price,
      originalPrice,
      category,
      isbn,
      length,
      published,
      description,
      coverImage: coverImage || "/api/placeholder/300/450"
    });

    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private/Admin
router.put('/:id', async (req, res) => {
  try {
    const { 
      title, 
      author, 
      price, 
      originalPrice, 
      category, 
      isbn, 
      length, 
      published, 
      description, 
      coverImage 
    } = req.body;

    const book = await Book.findById(req.params.id);

    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.price = price || book.price;
      book.originalPrice = originalPrice || book.originalPrice;
      book.category = category || book.category;
      book.isbn = isbn || book.isbn;
      book.length = length || book.length;
      book.published = published || book.published;
      book.description = description || book.description;
      book.coverImage = coverImage || book.coverImage;

      const updatedBook = await book.save();
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Admin
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book) {
      await book.deleteOne();
      res.json({ message: 'Book removed' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;