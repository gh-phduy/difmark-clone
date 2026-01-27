/**
 * Format Utilities
 * Các hàm format dữ liệu
 */

/**
 * Format giá tiền
 *
 * @param price - Giá trị số
 * @param currency - Đơn vị tiền tệ (default: USD)
 * @param locale - Locale (default: en-US)
 * @returns Chuỗi đã format
 *
 * @example
 * formatPrice(99.99) // "$99.99"
 * formatPrice(99.99, 'VND', 'vi-VN') // "99.990 ₫"
 */
export function formatPrice(
  price: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: currency === "VND" ? 0 : 2,
    maximumFractionDigits: currency === "VND" ? 0 : 2,
  }).format(price);
}

/**
 * Format giá rút gọn (e.g., $99.99)
 *
 * @param price - Giá trị số
 * @returns Chuỗi đã format với ký hiệu $
 */
export function formatPriceShort(price: number): string {
  return `$${price.toFixed(2)}`;
}

/**
 * Tính phần trăm giảm giá
 *
 * @param originalPrice - Giá gốc
 * @param currentPrice - Giá hiện tại
 * @returns Phần trăm giảm giá (rounded)
 */
export function calculateDiscount(
  originalPrice: number,
  currentPrice: number
): number {
  if (originalPrice <= 0) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

/**
 * Format ngày tháng
 *
 * @param date - Date object hoặc ISO string
 * @param options - Intl.DateTimeFormatOptions
 * @param locale - Locale (default: en-US)
 * @returns Chuỗi ngày đã format
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  locale: string = "en-US"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Format ngày rút gọn (e.g., "28 Aug 2025")
 */
export function formatDateShort(date: Date | string): string {
  return formatDate(date, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Format số lượng rút gọn (e.g., 1.2K, 3.5M)
 *
 * @param num - Số cần format
 * @returns Chuỗi đã format
 */
export function formatCompactNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
}

/**
 * Format rating (e.g., "4.5/5")
 */
export function formatRating(score: number, maxScore: number = 5): string {
  return `${score.toFixed(1)}/${maxScore}`;
}

/**
 * Pluralize từ dựa trên số lượng
 *
 * @example
 * pluralize(1, 'review') // "1 review"
 * pluralize(5, 'review') // "5 reviews"
 */
export function pluralize(
  count: number,
  singular: string,
  plural?: string
): string {
  const pluralForm = plural || `${singular}s`;
  return `${count} ${count === 1 ? singular : pluralForm}`;
}
