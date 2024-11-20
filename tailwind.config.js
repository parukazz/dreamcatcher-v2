/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "428px",
          md: "780px",
          lg: "970px",
          xl: "1350px",
          "2xl": "1830px",
        },
      },
      fontFamily: {
        main: ["Inter Tight", "sans-serif"],
      },
      colors: {
        primary: "#111111",
        accent: "#E10000",
        white: "#FFFFFF",
        silver: "#9E9E9E",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              "font-size": "11.875rem",
              "font-weight": "700",
            },
            h2: {
              "font-size": "10.25rem",
              "font-weight": "700",
            },
            h3: {
              "font-size": "5.75rem",
              "font-weight": "700",
            },
          },
        },
      }),
      backgroundImage: {
        "hero-banner": "url('/src/assets/img/banner.webp')",
      },
    },
  },
  plugins: [],
};
