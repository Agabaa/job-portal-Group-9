import './config/instrument.js'
import express from 'express'

import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'

const cors = require('cors');

// Initialize Express
const app = express()

// Connect to database
connectDB()
await connectCloudinary()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhooks)
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)

// Port
const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})








// import "./config/instrument.js";
// import express from "express";
// import "dotenv/config";
// import db from "./config/db.js"; // MySQL Database connection
// import * as Sentry from "@sentry/node";
// import { clerkWebhooks } from "./controllers/webhooks.js";
// import companyRoutes from "./routes/companyRoutes.js";
// import connectCloudinary from "./config/cloudinary.js";
// import jobRoutes from "./routes/jobRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import { clerkMiddleware } from "@clerk/express";
// // import cors from "cors";

// const cors = require('cors');
// // Initialize Express
// const app = express();

// // Connect to MySQL database
// (async () => {
//   try {
//     await db.query("SELECT 1");
//     console.log("✅ MySQL Database Connected");
//   } catch (err) {
//     console.error("❌ MySQL Connection Failed:", err.message);
//     process.exit(1);
//   }
// })();

// // Connect Cloudinary
// await connectCloudinary();

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// // Routes
// app.get("/", (req, res) => res.send("API Working"));
// app.get("/debug-sentry", function mainHandler(req, res) {
//   throw new Error("My first Sentry error!");
// });
// app.post("/webhooks", clerkWebhooks);
// app.use("/api/company", companyRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/users", userRoutes);

// // Port
// const PORT = process.env.PORT || 5000;

// Sentry.setupExpressErrorHandler(app);

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });
