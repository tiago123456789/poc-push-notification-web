
const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("./../config.json");

const app = initializeApp({
    credential: cert(serviceAccount.credential),
    ...serviceAccount.firebase
});

module.exports = app;