import router from 'express'
import { listBooks ,getBooks,listBooks,updateBooks,deleteBooks} from '../controllers/book.js'


const routerExpress = router()


routerExpress.get('/', listBooks)
routerExpress.get('/',listBooks)
routerExpress.get('/:id', getBooks)
routerExpress.put("/:id", updateBooks) 
routerExpress.delete("/:id", deleteBooks)

export default routerExpress
// module.exports= router

// MVC  => model view controller