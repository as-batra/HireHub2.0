import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import { rateLimiter } from "./middlewares/rateLimiter.js";
import { nosqlSanitizer } from "./middlewares/nosqlSanitizer.js";
import { securityHeaders } from "./middlewares/securityHeaders.js";
import { initSocket } from "./utils/socket.js";

dotenv.config({});

const app = express();

// middleware
app.use(rateLimiter);
app.use(securityHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(nosqlSanitizer);
const corsOptions = {
  origin: ["http://localhost:5173", "https://hirehub-snowy-rho.vercel.app"],
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

const server = http.createServer(app);
initSocket(server);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
