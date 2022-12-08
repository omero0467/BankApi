import { Router } from 'express';
import {getUser,getAllUsers,createUser} from "../controller/usersUtils.js"
export const usersRoute = Router()

usersRoute.get("",getAllUsers)
usersRoute.get("/:id",getUser)
usersRoute.post("",createUser)
