module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 18%, 88%)",
        input: "hsl(210, 18%, 88%)",
        ring: "hsl(194, 83%, 55%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(210, 15%, 15%)",
        primary: {
          DEFAULT: "hsl(210, 38%, 12%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(210, 38%, 20%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        tertiary: {
          DEFAULT: "hsl(194, 83%, 55%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(210, 15%, 15%)",
        },
        success: "hsl(145, 62%, 37%)",
        warning: "hsl(36, 95%, 48%)",
        gray: {
          50: "hsl(210, 25%, 98%)",
          100: "hsl(210, 22%, 94%)",
          200: "hsl(210, 18%, 88%)",
          300: "hsl(210, 14%, 75%)",
          400: "hsl(210, 10%, 60%)",
          500: "hsl(210, 9%, 45%)",
          600: "hsl(210, 10%, 35%)",
          700: "hsl(210, 12%, 25%)",
          800: "hsl(210, 15%, 18%)",
          900: "hsl(210, 20%, 12%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 22%, 94%)",
          foreground: "hsl(210, 10%, 35%)",
        },
        accent: {
          DEFAULT: "hsl(194, 83%, 55%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 15%, 15%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 15%, 15%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Geist", "sans-serif"],
      },
      fontSize: {
        h1: "2.827rem",
        h2: "2rem",
        h3: "1.414rem",
        body: "1rem",
        small: "0.875rem",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      backgroundImage: {
        'gradient-1': "linear-gradient(135deg, hsl(194, 83%, 55%), hsl(219, 76%, 45%))",
        'gradient-2': "linear-gradient(135deg, hsl(194, 63%, 48%), hsl(219, 63%, 38%))",
        'button-border-gradient': "linear-gradient(135deg, hsl(194, 83%, 55%) 0%, hsl(219, 76%, 45%) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
