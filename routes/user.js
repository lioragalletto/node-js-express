import router from 'express'
import {listUser,getUser,updateUser} from '../controllers/user.js'


const routerExpress = router()


routerExpress.get('/',listUser)
routerExpress.get('/:id',getUser)
routerExpress.put('/:id',updateUser)


// module.exports=router

export default routerExpress 