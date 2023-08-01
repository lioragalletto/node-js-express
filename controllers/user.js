import { log } from 'console'
import { readFileSync } from 'fs'

import {successResponse,errorResponse} from '../utils.js'

 

const loadUsers = () => {

    const users = readFileSync("./data/users.json",'utf8')

    return JSON.parse(users)

}

 

 

export const listUser = (req, res) => {

    try{

        const users = loadUsers();

        successResponse(res,users)

    }

    catch(e){

       errorResponse(res,'Error in load user')

    }

       

}

 

export const getUser = (req, res) => {

    try{

        const { id } = req.params

        const users = loadUsers();

        const findUser = users.find(user => user.id == id)

        successResponse(res,findUser)

    }

    catch(e){  

        errorResponse(res,'Error in load user or in user find')

    }

}


export const updateUser = (req,res) => {
  try {
    const {id} = req.params 
    const body = req.body 
    console.log({body})
    const users = loadUsers(); 
    const findUser = users.findIndex(user => user.id == id )
    users[findUser] = { ...body};
    const userString = JSON.stringify(users)
    writeFileSync( "./data/users.json", userString)
    console.log("user2", users);
    successResponse(res,users)


  }
  catch (e){
    errorResponse(res,'Error in load user or in user find')
    console.log(e);
  }

  

}