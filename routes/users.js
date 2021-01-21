/* This file contains all the routes, it is very simple and clean. Very easy to read. */

import express from "express"; // Express, very nice.

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js" // importing all the logic

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;