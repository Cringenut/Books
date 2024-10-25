import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

let books = [
    {
        title: "book1",
        author: "author1",
        category: "category1",
        description: "desc1"
    },
    {
        title: "book2",
        author: "author2",
        category: "category2",
        description: "desc2"
    },
    {
        title: "book3",
        author: "author2",
        category: "category2",
        description: "desc1"
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

renderApp();

function addBook(newBook) {
    books.push(newBook);
    renderApp();
}

function renderApp(selectedCategory = null) {

    if (document.getElementById("category-select")) {
        selectedCategory = document.getElementById("category-select").value
    }

    let filteredBooks = selectedCategory
        ? books.filter((book) => book.category === selectedCategory)
        : books;

    const categories = [...new Set(books.map((book) => book.category))];
    root.render(<App books={filteredBooks} categories={categories} addBookFunction={addBook} renderFunction={renderApp} />);
}
