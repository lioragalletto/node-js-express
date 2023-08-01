


import { readFileSync, writeFileSync  } from 'fs'
import {successResponse,errorResponse} from '../utils.js'

const loadBooks = () => {
    const books = readFileSync("./data/books.json",'utf8')
    return JSON.parse(books)
}


export const listBooks = (req, res) => {
    try{
        const books = loadBooks();
        successResponse(res,books)
    }
    catch(e){
       errorResponse(res,'Error in load book')
    }
       
}

export const getBooks = (req, res) => {
    try{
        const { id } = req.params
        const books = loadBooks();
        const findBook = books.find(Book => Book.id == id)
        successResponse(res,findBook)
    }
    catch(e){
        errorResponse(res,'Error in load Book or in Book find')
    }
}

export const updateBooks = (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
     
      
        const books = loadBooks();
        const findBookIndex = books.findIndex(Book => Book.id == id);
      
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

export const deleteBooks = (req, res) => {
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