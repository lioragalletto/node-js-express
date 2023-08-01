import router from 'express'
import {deleteUser, getUsers, listUsers, updateUser } from '../controllers/user.js'


const routerExpress = router()


routerExpress.get('/',listUsers)
routerExpress.get('/:id', getUsers)
routerExpress.put("/:id", updateUser) 
routerExpress.delete("/:id", deleteUser)
// module.exports=router

export default routerExpress 