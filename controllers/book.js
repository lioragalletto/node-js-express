


import { readFileSync, writeFileSync  } from 'fs'
import {successResponse,errorResponse} from '../utils.js'


//loadBooks() est une fonction qui lit le contenu du fichier 'books.json' de manière synchrone (utilisation de readFileSync) et retourne un tableau d'objets JavaScript après avoir converti les données JSON lues à partir du fichier.
const loadBooks = () => {
    const books = readFileSync("./data/books.json",'utf8')
    return JSON.parse(books)
}


// Cette fonction est un gestionnaire de route pour l'API permettant de récupérer la liste complète de livres. Elle appelle la fonction loadBooks() pour obtenir tous les livres, puis utilise la fonction successResponse() pour envoyer les données des livres en tant que réponse au client.

export const listBooks = (req, res) => {
    try{
        const books = loadBooks();
        successResponse(res,books)
    }
    catch(e){
       errorResponse(res,'Error in load book')
    }
       
}

//Cette fonction est un autre gestionnaire de route pour l'API permettant de récupérer un livre spécifique par son identifiant. Elle commence par extraire l'ID du livre à partir des paramètres de la requête (req.params). Ensuite, elle appelle loadBooks() pour obtenir tous les livres, puis recherche le livre correspondant à l'ID fourni. Si le livre est trouvé, il est renvoyé au client en utilisant 

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

//Cette fonction est un gestionnaire de route pour l'API permettant de mettre à jour les informations d'un livre spécifique. Elle commence par extraire l'ID du livre à partir des paramètres de la requête (req.params) et les données mises à jour du livre à partir du corps de la requête (req.body). Ensuite, elle appelle loadBooks() pour obtenir tous les livres, recherche le livre correspondant à l'ID fourni, puis met à jour ses informations. Si le livre est trouvé, elle utilise writeFileSync() pour écrire les modifications dans le fichier 'books.json' et renvoie le livre mis à jour en tant que réponse.

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


// si c = -1 ca veut dire quil existe pas , s'il le livre est trouve ,  splice == supp un element de l'array  
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