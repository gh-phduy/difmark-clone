import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow Next.js frontend
    credentials: true,
  })
);
app.use(express.json());

// ============================================
// MOCK DATA
// ============================================

const mockProducts = {
  1: {
    data: {
      id: "1",
      name: "Battlefield 6 (Xbox Series)",
      type: "Product key",
      platform: "Xbox Live",
      edition: "Standard",
      delivery: "Instant",
      activationRegion: "any country",
      price: 100,
      currency: "$",
      images: ["/battlefield6.jpg", "/battlefield6-2.jpg"],
    },
    seller: {
      id: "1",
      name: "CodesMarket",
      avatar: "/avt.jpg",
      isOnline: true,
      badge: "🛡️",
      tier: "Legendary",
      rating: 5,
      successRate: 97.51,
      totalFeedbacks: 1012,
      timezone: "UTC +00:00",
      totalSales: 115101,
      positiveFeedbacks: 99.58,
      negativeFeedbacks: 6.93,
    },
  },
  2: {
    data: {
      id: "2",
      name: "Call of Duty: Modern Warfare III",
      type: "Product key",
      platform: "Steam",
      edition: "Deluxe",
      delivery: "Instant",
      activationRegion: "Global",
      price: 79.99,
      currency: "$",
      images: ["/cod-mw3.jpg"],
    },
    seller: {
      id: "2",
      name: "GameKeys Pro",
      avatar: "/seller2.jpg",
      isOnline: false,
      badge: "⭐",
      tier: "Elite",
      rating: 4,
      successRate: 95.2,
      totalFeedbacks: 1542,
      timezone: "UTC +02:00",
      totalSales: 45230,
      positiveFeedbacks: 97.8,
      negativeFeedbacks: 2.2,
    },
  },
  3: {
    data: {
      id: "3",
      name: "Cyberpunk 2077 Ultimate Edition",
      type: "Product key",
      platform: "GOG",
      edition: "Ultimate",
      delivery: "Instant",
      activationRegion: "Worldwide",
      price: 59.99,
      currency: "$",
      images: ["/cyberpunk.jpg"],
    },
    seller: {
      id: "3",
      name: "DigitalGames",
      avatar: "/seller3.jpg",
      isOnline: true,
      badge: "🏆",
      tier: "Master",
      rating: 5,
      successRate: 98.75,
      totalFeedbacks: 8921,
      timezone: "UTC -05:00",
      totalSales: 234567,
      positiveFeedbacks: 99.12,
      negativeFeedbacks: 0.88,
    },
  },
};

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
