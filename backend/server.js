import express from "express";
import cors from "cors";
import { mockProducts } from "./data.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// ============================================
// ROUTES
// ============================================

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Get all products
app.get("/api/products", async (req, res) => {
  // Simulate slow network with 5 seconds delay
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const products = Object.values(mockProducts);
  res.json({
    products,
    total: products.length,
  });
});

// Get single product by ID
app.get("/api/products/:id", async (req, res) => {
  // Simulate slow network (2 seconds delay)
  // await new Promise((resolve) => setTimeout(resolve, 2000));

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
     GET /api/health        - Health check
     GET /api/products      - Get all products
     GET /api/products/:id  - Get product by ID
  
  🧪 Test URLs:
     http://localhost:${PORT}/api/products
     http://localhost:${PORT}/api/products/1
     http://localhost:${PORT}/api/products/2
     http://localhost:${PORT}/api/products/3
  `);
});
