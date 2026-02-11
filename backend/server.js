import "dotenv/config";
import express from "express";
import cors from "cors";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { mockProducts, listingProducts } from "./data.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Google OAuth Client
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
);

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

// ============================================
// AUTH ROUTES
// ============================================

// 1. Redirect to Google
app.get("/api/auth/google", (req, res) => {
  const authorizeUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });
  res.redirect(authorizeUrl);
});

// 2. Google Callback
app.get("/api/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange code for tokens
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    // Get User Info
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    // Mock Database Logic: Find or Create User
    const user = {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };

    console.log("User authenticated:", user);

    // Generate JWT Token
    const token = jwt.sign(user, process.env.JWT_SECRET || "default_secret", {
      expiresIn: "1d",
    });

    // Redirect to Frontend with Token
    // In a real app, you might set a secure cookie or pass token in URL
    res.redirect(
      `${process.env.FRONTEND_URL || "http://localhost:3000"}?token=${token}`,
    );
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.redirect(
      `${process.env.FRONTEND_URL || "http://localhost:3000"}?error=auth_failed`,
    );
  }
});

// ============================================
// EXISTING ROUTES
// ============================================

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Get all products
app.get("/api/products", async (req, res) => {
  const products = Object.values(mockProducts);
  res.json({
    products,
    total: products.length,
  });
});

// Get listing products (for the search/category page)
app.get("/api/listing-products", (req, res) => {
  res.json({
    products: listingProducts,
    total: listingProducts.length,
  });
});

// Get single product by ID
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = mockProducts[id];

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
  🚀 Backend server is running!
  
  📍 Local:    http://localhost:${PORT}
  
  📚 API Endpoints:
     GET /api/health                - Health check
     GET /api/products              - Get all products
     GET /api/products/:id          - Get product by ID
     GET /api/auth/google           - Google Login
  `);
});
