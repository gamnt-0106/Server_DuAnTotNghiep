import  express  from "express"
import { addCategory, editCategory, getCategoryById, listCategories, removeCategory } from "../controllers/category";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../midlerware/checkAuth";


const routeCategory = express.Router();

routeCategory.get('/categories', listCategories);
routeCategory.post('/categories/', addCategory);
routeCategory.put('/categories/:id', editCategory);
routeCategory.delete('/categories/:id', removeCategory);
routeCategory.get('/categories/:id', getCategoryById);

routeCategory.param("userId", userById)

export default routeCategory;