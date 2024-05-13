/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cloud-background":
          "url('https://jacob-portfolio.s3.amazonaws.com/Cloud-for-port.jpg')",
      },
    },
  },
  plugins: [],
};
