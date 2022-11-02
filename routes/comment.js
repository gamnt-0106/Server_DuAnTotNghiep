import  express  from "express"
import { addComment, editComment, getCommentById, listComment, removeComment } from "../controllers/comment";


const routeComment = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comments managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - userId
 *         - postId
 *         - content
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Comments
 *         userId:
 *           type: string
 *           description: userId of Comments
 *         postId:
 *           type: string
 *           description: postId of Comments
 *         content:
 *           type: string
 *           description: content of Comments
 *         datetime:
 *           type: string
 *           description: datetime of Comments
 *         author:
 *           type: string
 *           description: author of Comments
 *         avatar:
 *           type: string
 *           description: avatar of Comments
 *         rating:
 *           type: string
 *           description: rating of Comments
 *         like:
 *           type: Array
 *           description: like of Comments
 *         dislike:
 *           type: Array
 *           description: dislike of Comments
 *         reply:
 *           type: Array
 *           description: reply of Comments
 *         createdAt:
 *           type: string
 *           description: Create Time of Comments
 *         updatedAt:
 *           type: string
 *           description: Update Time of Comments
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         userId: 62e8c62b587bcad52fbaf0b7
 *         postId: 62e8c62b587bcad52fbaf0b7
 *         content: content of Comments
 *         datetime: datetime of Comments
 *         author: author of Comments
 *         avatar: avatar of Comments
 *         rating: rating of Comments
 *         like: [
 *              {
 *                  userId: 62e8c62b587bcad52fbaf0b7,
 *                  status: like
 *              }
 *          ]
 *         dislike: [
 *              {
 *                  userId: 62e8c62b587bcad52fbaf0b7,
 *                  status: like
 *              }
 *          ]
 *         reply: [
 *              {
 *                  userId: 62e8c62b587bcad52fbaf0b7,
 *                  status: like
 *              }
 *          ]
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     commentId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Comment id
 *
 * */

// -------------------Get List Comment----------------------
/**
 * @swagger
 *   /api/comment:
 *     get:
 *       summary: Return the list of all Comments
 *       tags: [Comments]
 *       responses:
 *         200:
 *           description: The List of Comments
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Comment'
 *
 * */
 routeComment.get('/comment', listComment);

 // -------------------Get Detail Comment----------------------
 /**
  * @swagger
  *   /api/comment/{id}:
  *     get:
  *       summary: Get Comment by id
  *       tags: [Comments]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Comments id
  *       responses:
  *           200:
  *             description: The Comments detail by id
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Comment'
  *           400:
  *             description: The Comments is Not found
  */
 
  routeComment.get('/comment/:id', getCommentById);
 
 // -------------------Add Comment----------------------
 /**
  * @swagger
  * /api/comment:
  *   post:
  *     summary: Create a Comment
  *     tags: [Comments]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Comment'
  *     responses:
  *       200:
  *         description: Comment was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Comment'
  *       400:
  *         description: Fail to create a Comment
  */
 
  routeComment.post('/comment', addComment);
 
 // -------------------Update Comment----------------------
 /**
  * @swagger
  * /api/comment/{id}:
  *   put:
  *     summary: Update a Comment
  *     tags: [Comments]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Comment id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Comment'
  *     responses:
  *       200:
  *         description: Comment was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Comment'
  *       400:
  *         description: Fail to updated a Comment
  */
 
  routeComment.put('/comment/:id', editComment);
 
 // -------------------Remove Comment----------------------
 /**
  * @swagger
  * /api/comment/{id}:
  *   delete:
  *     summary: Remove a Comment by id
  *     tags: [Comments]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Comment id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Comment'
  *     responses:
  *       200:
  *         description: Comment was successfully removed
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Comment'
  *       400:
  *         description: Fail to removed a Comment
  */
 
  routeComment.delete('/comment/:id', removeComment);
 
 
 // -------------------Join Comment----------------------
 /**
  * @swagger
  * /api/comment/like/{id}:
  *   put:
  *     summary: Join a Comment by link
  *     tags: [Comments]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Comment id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Comment'
  *     responses:
  *       200:
  *         description: Comment was successfully join
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Comment'
  *       400:
  *         description: Fail to join a Comment
  */
 
  routeComment.put('/comment/like/:id', editComment);
 

export default routeComment;