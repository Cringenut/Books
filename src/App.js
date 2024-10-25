import BookCatalogComponent from "./components/BookCatalogComponent";
import AddBookComponent from "./components/AddBookComponent";

function App({ books, categories, addBookFunction, renderFunction }) {
  return (
      <div>
          <>
              <AddBookComponent addFunction={addBookFunction}/>
              <select name="categories" id="category-select" onChange={renderFunction}>
                  <option value="">--Please choose a category--</option>
                  {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                  ))}
              </select>
              <BookCatalogComponent books={books}></BookCatalogComponent>
          </>
      </div>
  );
}

export default App;
