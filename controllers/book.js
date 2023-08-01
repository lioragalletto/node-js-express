import {books} from "../data/books.js"

export const listBooks = (req, res) => {
    res.status(200).send(books)
    // console.log({books})
  return books;
}



export const updateBook = (req, res) => {
  try {
      const { id } = req.params;
      const body = req.body;
      console.log({ body });
    
      const books = loadBooks();
      const findBookIndex = books.findIndex(Book => Book.id == id);
     console.log(books,findBookIndex)
     let updatedBook;
      if (findBookIndex !== -1) {
        updatedBook = { ...books[findBookIndex], ...body };
        books[findBookIndex] = updatedBook;

        writeFileSync("./data/books.json", JSON.stringify(books));
      } else {
        console.log('Book not found.');
      }
      successResponse(res, updatedBook);
    } catch (e) {
      errorResponse(res, 'Error in load Book or Update');
    }
}

export const deleteBook = (req, res) => {
  try {
    const { id } = req.params;
    const books = loadBooks();
    const index = books.findIndex(book => book.id == id)

    if (index === -1) return errorResponse(res, 'book non trouvé');
    books.splice(index, 1);
      writeFileSync("./data/books.json", JSON.stringify(books, null, 2), 'utf8');

    successResponse(res, { message: 'book supprimé avec succès' });
  } catch (e) {
    errorResponse(res, 'Erreur lors de la suppression de book');
  }
}; 