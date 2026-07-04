export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        navy: "#0A2E5C",
        skysoft: "#EAF5FF",
        ink: "#102033"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(13, 110, 253, 0.14)"
      }
    }
  },
  plugins: []
};
