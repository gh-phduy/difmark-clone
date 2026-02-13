import { describe, it, expect } from "vitest";
import { formatPrice, calculateDiscount, formatCompactNumber } from "./format";

describe("Format Utilities", () => {
  describe("formatPrice", () => {
    it("should format USD price correctly", () => {
      // Note: Intl.NumberFormat might use non-breaking spaces in some environments
      const result = formatPrice(99.99, "USD", "en-US");
      expect(result).toContain("$99.99");
    });

    it("should format VND price correctly", () => {
      const result = formatPrice(100000, "VND", "vi-VN");
      // VND usually doesn't show decimals in your utility
      expect(result).toContain("100.000");
    });
  });

  describe("calculateDiscount", () => {
    it("should calculate 20% discount correctly", () => {
      expect(calculateDiscount(100, 80)).toBe(20);
    });

    it("should return 0 for same prices", () => {
      expect(calculateDiscount(50, 50)).toBe(0);
    });

    it("should handle zero original price", () => {
      expect(calculateDiscount(0, 50)).toBe(0);
    });

    it("should round the discount percentage", () => {
      // (100 - 33.33) / 100 = 66.67%
      expect(calculateDiscount(100, 33.33)).toBe(67);
    });
  });

  describe("formatCompactNumber", () => {
    it("should format thousands to K", () => {
      expect(formatCompactNumber(1200)).toBe("1.2K");
    });

    it("should format millions to M", () => {
      expect(formatCompactNumber(3500000)).toBe("3.5M");
    });

    it("should leave small numbers alone", () => {
      expect(formatCompactNumber(450)).toBe("450");
    });
  });
});
