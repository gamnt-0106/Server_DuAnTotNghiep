import express from "express";
import {
  addDay,
  detailDay,
  editDay,
  getDayBiggest,
  listDay,
  listDayByWeek,
  removeDay,
} from "../controllers/day";

const routeDay = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Days
 *   description: Days managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Day:
 *       type: object
 *       required:
 *         - week
 *         - order
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Days
 *         title:
 *           type: string
 *           description: title of Days
 *         order:
 *           type: Number
 *           description: order of Days
 *         week:
 *           type: string
 *           description: week of Days
 *         createdAt:
 *           type: string
 *           description: Create Time of Days
 *         updatedAt:
 *           type: string
 *           description: Update Time of Days
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         title: title
 *         order: 100000
 *         week: 62e8c62b587bcad52fbaf0b
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     dayId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Day id
 *
 * */

// -------------------Get List Day----------------------
/**
 * @swagger
 *   /api/day:
 *     get:
 *       summary: Return the list of all Days
 *       tags: [Days]
 *       responses:
 *         200:
 *           description: The List of Days
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Day'
 *
 * */
routeDay.get("/day", listDay);

// -------------------Get Day by week----------------------
/**
 * @swagger
 *   /api/day/week/{id}:
 *     get:
 *       summary: Get Day by id
 *       tags: [Days]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Days id
 *       responses:
 *           200:
 *             description: The Days by week
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Day'
 *           400:
 *             description: The Days is Not found
 */

routeDay.get("/day/week/:id", listDayByWeek);

// -------------------Get Detail Day----------------------
/**
 * @swagger
 *   /api/day/{id}:
 *     get:
 *       summary: Get Day by id
 *       tags: [Days]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Days id
 *       responses:
 *           200:
 *             description: The Days detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Day'
 *           400:
 *             description: The Days is Not found
 */

routeDay.get("/day/:id", detailDay);

// -------------------Add Day----------------------
/**
 * @swagger
 * /api/day:
 *   post:
 *     summary: Create a Day
 *     tags: [Days]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Day'
 *     responses:
 *       200:
 *         description: Day was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Day'
 *       400:
 *         description: Fail to create a Day
 */

routeDay.post("/day", addDay);

// -------------------Update Day----------------------
/**
 * @swagger
 * /api/day/{id}:
 *   put:
 *     summary: Update a Day
 *     tags: [Days]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Day id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Day'
 *     responses:
 *       200:
 *         description: Day was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Day'
 *       400:
 *         description: Fail to updated a Day
 */

routeDay.put("/day/:id", editDay);

// -------------------Remove Day----------------------
/**
 * @swagger
 * /api/day/{id}:
 *   delete:
 *     summary: Remove a Day by id
 *     tags: [Days]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Day id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Day'
 *     responses:
 *       200:
 *         description: Day was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Day'
 *       400:
 *         description: Fail to removed a Day
 */

routeDay.delete("/day/:id", removeDay);

routeDay.get("/dayBiggest", getDayBiggest);
export default routeDay;
