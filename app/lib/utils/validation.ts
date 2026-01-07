/**
 * Validation Utilities
 * Các hàm validate input
 */

/**
 * Kiểm tra email hợp lệ
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Kiểm tra password đủ mạnh
 * - Ít nhất 8 ký tự
 * - Có chữ hoa
 * - Có chữ thường
 * - Có số
 */
export function isStrongPassword(password: string): boolean {
  const minLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  return minLength && hasUppercase && hasLowercase && hasNumber;
}

/**
 * Sanitize string để prevent XSS
 */
export function sanitizeString(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };

  return str.replace(/[&<>"'/]/g, (char) => map[char]);
}

/**
 * Trim và normalize whitespace
 */
export function normalizeWhitespace(str: string): string {
  return str.trim().replace(/\s+/g, " ");
}

/**
 * Kiểm tra string không rỗng
 */
export function isNotEmpty(str: string | null | undefined): boolean {
  return str !== null && str !== undefined && str.trim().length > 0;
}

/**
 * Kiểm tra số trong range
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Kiểm tra URL hợp lệ
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate search query (không quá dài, không có ký tự nguy hiểm)
 */
export function validateSearchQuery(query: string): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  const MAX_LENGTH = 100;
  const sanitized = normalizeWhitespace(sanitizeString(query));

  if (sanitized.length > MAX_LENGTH) {
    return {
      isValid: false,
      sanitized: sanitized.slice(0, MAX_LENGTH),
      error: `Search query too long (max ${MAX_LENGTH} characters)`,
    };
  }

  return {
    isValid: true,
    sanitized,
  };
}
