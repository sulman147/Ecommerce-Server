var admin = require("firebase-admin");

var serviceAccount = require("../config/ecommerce_mern.json.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-37ee9.firebaseio.com",
});

module.exports = admin;
