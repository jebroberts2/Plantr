const db = require("./models.js");

db.sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch(console.log("erorrr"))
  .finally(() => {
    db.close();
  });
