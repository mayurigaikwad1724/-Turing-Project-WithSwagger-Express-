require('dotenv').config()
const knex = require("knex")({
  client: "mysql",
  connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Mayuri@123",
      database: "turning_API",
  },
});

module.exports=knex