const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const phoneControllers = require("./controllers/phoneControllers");
const totalControllers = require("./controllers/totalControllers");
const stateControllers = require("./controllers/stateControllers");
const auth = require("./middlewares/auth");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/user", auth, userControllers.browse);
router.get("/user/:id", userControllers.read);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);

router.get("/téléphones", phoneControllers.browse);
router.get("/téléphones/:id", phoneControllers.read);
router.put("/téléphones/:id", phoneControllers.edit);
router.post("/téléphones", phoneControllers.add);
router.delete("/téléphones/:id", phoneControllers.destroy);

router.get("/totals", totalControllers.browse);
router.get("/totals/:id", totalControllers.read);
router.put("/totals/:id", totalControllers.edit);
router.post("/totals", totalControllers.add);
router.delete("/totals/:id", totalControllers.destroy);

router.get("/etat", stateControllers.browse);
router.get("/etat/:id", stateControllers.read);
router.put("/etat/:id", stateControllers.edit);
router.post("/etat", stateControllers.add);
router.delete("/etat/:id", stateControllers.destroy);

module.exports = router;
