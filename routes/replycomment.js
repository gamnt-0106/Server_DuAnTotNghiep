import  express  from "express"
import { addreplyComment, editreplyComment, getreplyCommentById, listreplyComment, removereplyComment } from "../controllers/replycomment";


const routeReplyComment = express.Router();

routeReplyComment.get('/reply', listreplyComment);
routeReplyComment.post('/reply', addreplyComment);
routeReplyComment.put('/reply/:id', editreplyComment);
routeReplyComment.delete('/reply/:id', removereplyComment);
routeReplyComment.get('/reply/:id', getreplyCommentById);


export default routeReplyComment;