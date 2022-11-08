import  express  from "express";
import { addWellcome, listWellcome } from "../controllers/wellComeController";

const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: WellComes
 *   description: WellComes managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     WellCome:
 *       type: object
 *       required:
 *         - username
 *         - social
 *         - reason
 *         - timeStudy
 *         - numberphone
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of WellComes
 *         username:
 *           type: string
 *           description: username of WellComes
 *         social:
 *           type: string
 *           description: social of WellComes
 *         reason:
 *           type: string
 *           description: reason of WellComes
 *         numberphone:
 *           type: number
 *           description: numberphone of WellComes
 *         timeStudy:
 *           type: string
 *           description: timeStudy of WellComes
 *         createdAt:
 *           type: string
 *           description: Create Time of WellComes
 *         updatedAt:
 *           type: string
 *           description: Update Time of WellComes
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         username: 62e8c62b587bcad52fbaf0b
 *         reason: reason
 *         social: social
 *         numberphone: 0
 *         timeStudy: 2022-08-02T06:37:31.665+00:00
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     WellComeId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The WellCome id
 *
 * */

// -------------------Get List WellCome----------------------
/**
 * @swagger
 *   /api/listWellcome:
 *     get:
 *       summary: Return the list of all WellComes
 *       tags: [WellComes]
 *       responses:
 *         200:
 *           description: The List of WellComes
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/WellCome'
 *
 * */
 router.get("/listWellcome", listWellcome);

 
 // -------------------Add WellCome----------------------
 /**
  * @swagger
  * /api/addWellcome:
  *   post:
  *     summary: Create a WellCome
  *     tags: [WellComes]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/WellCome'
  *     responses:
  *       200:
  *         description: WellCome was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/WellCome'
  *       400:
  *         description: Fail to create a WellCome
  */
  router.post("/addWellcome", addWellcome)




export default router