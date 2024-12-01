/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blue": "#849ba8",
        "custom-green": "#10B981",
        "custom-pink": "#EC4899",
        "custom-bg": "#658292",
      },
      screens: {
        xs: { max: "479px" },
        xxs: { max: "200px" },
        sm: {max: "920px"},
      },
      fontSize: {
        xxs: "0.600rem", // Define XXS size (10px)
        xxxs: "0.5rem", // Define XXS size (10px)
      },
    },
  },
  plugins: [],
};
