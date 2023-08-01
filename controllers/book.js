import {books} from "../data/books.js"

export const listBooks = (req, res) => {
    res.status(200).send(books)
    // console.log({books})
  return books;
}
