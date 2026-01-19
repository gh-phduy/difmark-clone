import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ============================================
           DIFMARK DESIGN SYSTEM COLORS
           ============================================ */

        /* Brand Colors */
        brand: {
          DEFAULT: "hsl(var(--brand-primary))",
          light: "hsl(var(--brand-primary-light))",
          dark: "hsl(var(--brand-primary-dark))",
          accent: "hsl(var(--brand-accent))",
        },

        /* Surface Colors */
        surface: {
          base: "hsl(var(--surface-base))",
          elevated: "hsl(var(--surface-elevated))",
          overlay: "hsl(var(--surface-overlay))",
          card: "hsl(var(--surface-card))",
        },

        /* Text Colors */
        "dm-text": {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          muted: "hsl(var(--text-muted))",
          disabled: "hsl(var(--text-disabled))",
        },

        /* Border Colors */
        "dm-border": {
          subtle: "hsl(var(--border-subtle))",
          DEFAULT: "hsl(var(--border-default))",
          strong: "hsl(var(--border-strong))",
        },

        /* State Colors */
        state: {
          hover: "hsl(var(--state-hover))",
          active: "hsl(var(--state-active))",
          focus: "hsl(var(--state-focus))",
        },

        /* Accent Colors */
        "dm-accent": {
          green: "hsl(var(--accent-green))",
          "green-hover": "hsl(var(--accent-green-hover))",
          yellow: "hsl(var(--accent-yellow))",
          blue: "hsl(var(--accent-blue))",
          red: "hsl(var(--accent-red))",
          orange: "hsl(var(--accent-orange))",
        },

        /* Rating Colors */
        rating: {
          star: "hsl(var(--rating-star))",
          empty: "hsl(var(--rating-empty))",
        },

        /* ============================================
           SHADCN/UI DEFAULT COLORS
           ============================================ */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      /* Custom Screens */
      screens: {
        "1": "1px",
        "770": "770px",
        "800": "800px",
        "970": "970px",
        "990": "990px",
        "1000": "1000px",
        "1025": "1025px",
        "1100": "1100px",
        "1200": "1200px",
        "1280": "1280px",
        "1300": "1300px",
        "1440": "1440px",
        "1640": "1640px",
        "1800": "1800px",
        "1920": "1920px",
      },

      /* Border Radius */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* Transitions */
      transitionDuration: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
        slow: "var(--transition-slow)",
        slower: "var(--transition-slower)",
      },

      /* Animations */
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-out": "fadeOut 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
