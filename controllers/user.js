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



export const updateUser = (req, res) => {
  try {
      const { id } = req.params;
      const body = req.body;
      console.log({ body });
    
      const users = loadUsers();
      const findUserIndex = users.findIndex(user => user.id == id);
     console.log(users,findUserIndex)
     let updatedUser;
      if (findUserIndex !== -1) {
        updatedUser = { ...users[findUserIndex], ...body };
        users[findUserIndex] = updatedUser;

       writeFileSync("./data/users.json", JSON.stringify(users));
      } else {
        console.log('User not found.');
      }
      successResponse(res, updatedUser);
    } catch (e) {
      errorResponse(res, 'Error in load user or Update');
    }
}


export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const users = loadUsers();
    const index = users.findIndex(user => user.id == id)

    if (index === -1) return errorResponse(res, 'Utilisateur non trouvé');
    users.splice(index, 1);
      writeFileSync("./data/users.json", JSON.stringify(users, null, 2), 'utf8');

    successResponse(res, { message: 'Utilisateur supprimé avec succès' });
  } catch (e) {
    errorResponse(res, 'Erreur lors de la suppression de l\'utilisateur');
  }
}; 

