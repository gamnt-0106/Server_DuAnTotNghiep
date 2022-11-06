import  express  from "express"
import { addContact, editContact, getContactById, listContact, removeContact } from "../controllers/contact";


const routeContact = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contacts managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - address
 *         - birthday
 *         - email
 *         - phone
 *         - message
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Contacts
 *         name:
 *           type: string
 *           description: name of Contacts
 *         surname:
 *           type: String
 *           description: surname of Contacts
 *         address:
 *           type: String
 *           description: address of Contacts
 *         birthday:
 *           type: string
 *           description: birthday of Contacts
 *         email:
 *           type: string
 *           description: email of Contacts
 *         phone:
 *           type: number
 *           description: phone of Contacts
 *         message:
 *           type: string
 *           description: message of Contacts
 *         status:
 *           type: number
 *           description: status of Contacts
 *         sendAds:
 *           type: number
 *           description: sendAds of Contacts
 *         createdAt:
 *           type: string
 *           description: Create Time of Contacts
 *         updatedAt:
 *           type: string
 *           description: Update Time of Contacts
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         name: name
 *         surname: surname
 *         address: address of Contacts
 *         birthday: 2022-08-02T06:37:31.665+00:00
 *         email: anhnv@gmail.com
 *         phone: 0986547901
 *         message: message of Contacts
 *         status: 1
 *         sendAds: 1
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     ContactId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Contact id
 *
 * */

// -------------------Get List Contact----------------------
/**
 * @swagger
 *   /api/contact:
 *     get:
 *       summary: Return the list of all Contacts
 *       tags: [Contacts]
 *       responses:
 *         200:
 *           description: The List of Contacts
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Contact'
 *
 * */
 routeContact.get('/contact', listContact);

 // -------------------Get Detail Contact----------------------
 /**
  * @swagger
  *   /api/contact/{id}:
  *     get:
  *       summary: Get Contact by id
  *       tags: [Contacts]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Contacts id
  *       responses:
  *           200:
  *             description: The Contacts detail by id
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Contact'
  *           400:
  *             description: The Contacts is Not found
  */
 
  routeContact.get('/contact/:id', getContactById);
 
 // -------------------Add Contact----------------------
 /**
  * @swagger
  * /api/contact:
  *   post:
  *     summary: Create a Contact
  *     tags: [Contacts]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Contact'
  *     responses:
  *       200:
  *         description: Contact was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Contact'
  *       400:
  *         description: Fail to create a Contact
  */
 
  routeContact.post('/contact', addContact);
 
 // -------------------Update Contact----------------------
 /**
  * @swagger
  * /api/contact/{id}:
  *   put:
  *     summary: Update a Contact
  *     tags: [Contacts]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Contact id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Contact'
  *     responses:
  *       200:
  *         description: Contact was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Contact'
  *       400:
  *         description: Fail to updated a Contact
  */
 
  routeContact.put('/contact/:id', editContact);
 
 // -------------------Remove Contact----------------------
 /**
  * @swagger
  * /api/contact/{id}:
  *   delete:
  *     summary: Remove a Contact by id
  *     tags: [Contacts]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Contact id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Contact'
  *     responses:
  *       200:
  *         description: Contact was successfully removed
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Contact'
  *       400:
  *         description: Fail to removed a Contact
  */
 
  routeContact.delete('/contact/:id', removeContact);
 

export default routeContact;