// tailwind.config.js
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  // Other Tailwind CSS configurations
  jit: true,
  purge: {
    safelist: ["text-4xl", "text-blue-500", "text-3xl", "text-blue-600"],
  },
};
