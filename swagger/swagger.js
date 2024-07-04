const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth API",
      version: "1.0.0",
      description: "API for user authentication",
    },
  },
  apis: ["./routes/auth.js"], // Paths to the API documentation files
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
