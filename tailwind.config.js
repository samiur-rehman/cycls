/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  plugins: [import("tailwindcss-animate").then(mod => mod.default ? mod.default : mod)],
}