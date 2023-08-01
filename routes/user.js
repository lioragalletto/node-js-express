import router from 'express'
import {deleteUser, getUsers, listUsers, updateUser } from '../controllers/user.js'
import { auth } from '../middlewares/auth.js'
import { timeOfMyRequest} from '../middlewares/time.js'


const routerExpress = router()


routerExpress.get('/',listUsers)
routerExpress.get('/:id', auth,timeOfMyRequest)
routerExpress.put("/:id", updateUser) 
routerExpress.delete("/:id", deleteUser)


export default routerExpress 