const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
//////////////////////////MiddleWare Example ////////////////////////////
// const myMiddleware = (req, res, next) => {
//   console.log("IM A Middleware yay");
//   next();
// };
// router.get("/testing", myMiddleware, (req, res) => {
//   res.json({
//     data: "You successfully triend middleware",
//   });
// });
