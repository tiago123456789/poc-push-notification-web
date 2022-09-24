const ForerunnerDB = require("forerunnerdb");
const fdb = new ForerunnerDB();
const db = fdb.db("notification_db");

module.exports = db;