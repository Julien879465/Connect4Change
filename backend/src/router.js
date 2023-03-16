const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const phoneControllers = require("./controllers/phoneControllers");
const totalControllers = require("./controllers/totalControllers");
const stateControllers = require("./controllers/stateControllers");
const calcControllers = require("./controllers/calcControllers");
const fileControllers = require("./controllers/fileControllers");
const auth = require("./middlewares/auth");

const fileUpload = require("./middlewares/multer");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", auth, userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);

router.get("/telephones", phoneControllers.browse);
router.get("/telephones/:id", phoneControllers.read);
router.put("/telephones/:id", phoneControllers.edit);
router.post("/telephones", phoneControllers.add);
router.delete("/telephones/:id", phoneControllers.destroy);

router.get("/totals", totalControllers.browse);
router.get("/totals/:id", totalControllers.read);
router.put("/totals/:id", totalControllers.edit);
router.post("/totals", totalControllers.add);
router.delete("/totals/:id", totalControllers.destroy);

router.get("/etats", stateControllers.browse);
router.get("/etats/:id", stateControllers.read);
router.put("/etats/:id", stateControllers.edit);
router.post("/etats", stateControllers.add);
router.delete("/etats/:id", stateControllers.destroy);

router.get("/calc", calcControllers.browse);

router.get("/text", fileControllers.browse);
router.get("/text/:id", fileControllers.read);
router.put("/text/:id", fileControllers.edit);
router.post("/text", fileUpload, fileControllers.add);
router.delete("/text/:id", fileControllers.destroy);

module.exports = router;
