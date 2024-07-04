const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/userRoutes");
const { swaggerUi, specs } = require("./swagger/swagger");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use(cors());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
