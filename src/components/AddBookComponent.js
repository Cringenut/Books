function AddBookComponent({addFunction}) {
    let newBook = {title: '', author: '', category: '', description: ''};

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        console.log(newBook);
        addFunction(newBook);
    };

    const handleInputChange = (e) => {
        newBook[e.target.name] = e.target.value;
    };

    return (
        <form className="add-book-form" onSubmit={handleSubmit}>
            <h3>Add a New Book</h3>
            <div>
                <label>Title: </label>
                <input type="text" name="title" onChange={handleInputChange} required />
            </div>
            <div>
                <label>Author: </label>
                <input type="text" name="author" onChange={handleInputChange} required />
            </div>
            <div>
                <label>Category: </label>
                <input type="text" name="category" onChange={handleInputChange} required />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" onChange={handleInputChange} required />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBookComponent;
