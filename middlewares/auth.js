import { errorResponse } from '../utils.js'

import { loadUsers } from '../controllers/user.js'

 

export const auth = (req, res, next) => {

    const { password } = req.headers

    const { id } = req.params

 

    const users = loadUsers()

    const userExistAndAuthentificate = users.find((user) => user.id == id && user.password == password)

    if (userExistAndAuthentificate) { 
        req.user = userExistAndAuthentificate
          next()
    } 

    else errorResponse(res, 'you need authentification',401)

}