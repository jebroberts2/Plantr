const Sequalize = require("sequelize");
const db = new Sequalize("postgres://localhost:5432/plantr");

module.exports = db;
'pickle rick!'