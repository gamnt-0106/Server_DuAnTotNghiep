import express from "express";
import {
  addCategory,
  detailCategory,
  editCategory,
  getCategoryById,
  listCategories,
  removeCategory,
} from "../controllers/category";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../midlerware/checkAuth";

const routeCategory = express.Router();

routeCategory.get("/categories/:id", getCategoryById);

routeCategory.param("userId", userById);
// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Categories managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - title
 *         - detail
 *         - image
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Categories
 *         title:
 *           type: string
 *           description: title of Categories
 *         image:
 *           type: String
 *           description: image of Categories
 *         detail:
 *           type: String
 *           description: detail of Categories
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         image: Your friend is tall
 *         detail: string
 *         title: master
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     categoryId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The category id
 *
 * */

// -------------------Get List Categories----------------------
/**
 * @swagger
 *   /api/categories:
 *     get:
 *       summary: Return the list of all categories
 *       tags: [Categories]
 *       responses:
 *         200:
 *           description: The List of categories
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Category'
 *
 * */
routeCategory.get("/categories", listCategories);

// -------------------Get Detail Category----------------------
/**
 * @swagger
 *   /api/categories/{id}:
 *     get:
 *       summary: Get Category by id
 *       tags: [Categories]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Categoryes id
 *       responses:
 *           200:
 *             description: The Categoryes detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Category'
 *           400:
 *             description: The Categoryes is Not found
 */

routeCategory.get("/categories/:id", detailCategory);

// -------------------Add Category----------------------
/**
 * @swagger
 * /api/categories/{userId}:
 *   post:
 *     summary: Create a Class
 *     tags: [Categories]
 *     parameters:
 *           - in: path
 *             name: userId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Categoryes UserId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Fail to create a Category
 */

routeCategory.post("/categories/:userId", addCategory);

// -------------------Update Category----------------------
/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Update a Categories
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Fail to updated a Category
 */

routeCategory.put("/categories/:id", editCategory);

// -------------------Remove Category----------------------
/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Remove a Category by id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Fail to removed a Category
 */

routeCategory.delete("/categories/:id", removeCategory);

export default routeCategory;
