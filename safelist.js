// Import the entire Tailwind CSS module
import * as tailwind from "tailwindcss";

// Extract all class names from the module
const tailwindClasses = Object.keys(tailwind);

// Filter out non-class keys
const classList = tailwindClasses.filter(
  (className) => typeof tailwind[className] === "string"
);

// Export the array
module.exports = classList;
