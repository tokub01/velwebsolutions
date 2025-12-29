/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        // Wir benennen '3xl' in 'xxxl' um, da CSS-Selektoren
        // laut W3C-Standard nicht mit einer Zahl beginnen dürfen.
        // Dies fixiert die [esbuild css minify] Warnung.
        'xxxl': '2000px',
      },
    },
  },
  plugins: [],
}