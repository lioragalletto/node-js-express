import router from 'express'
import { listBooks } from '../controllers/book.js'


const routerExpress = router()


routerExpress.get('/', listBooks)


export default routerExpress
// module.exports= router

// MVC  => model view controller