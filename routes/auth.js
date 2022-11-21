import express  from "express"
import { changePassword, deleteUser, editPasswordUser, getCurrentUser, getUser, signIn, signInWidthFaceBook, signInWidthGoogle, signUp, updateAuth, updateUser, userDetail } from "../controllers/user";

const routeAuth = express.Router();

routeAuth.post('/signin',signIn);
routeAuth.post('/signInnWidthFacebook',signInWidthFaceBook);
routeAuth.post('/signInWidthGoogle',signInWidthGoogle);
routeAuth.post('/signup',signUp);
routeAuth.get('/users/:id',userDetail);
routeAuth.get('/users',getUser);
routeAuth.patch('/users/:id',updateAuth);
routeAuth.put('/users/:id',updateUser);
routeAuth.patch('/users/editPass/:id',editPasswordUser);
routeAuth.delete('/users/:id',deleteUser);
routeAuth.get('/users/currentUser/current', getCurrentUser);

export default routeAuth;

