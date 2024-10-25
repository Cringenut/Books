import BookComponent from "./BookComponent";

function BookCatalogComponent({books}) {
    return (
        <div className="book-catalog">
            {books.map((book, index) => (
                <div key={index}><BookComponent book={book}/></div>
            ))}
        </div>
    );
}

export default BookCatalogComponent;