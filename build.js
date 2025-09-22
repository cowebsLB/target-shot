// Build script for Target Shot Bar
const fs = require('fs');
const path = require('path');

// Simple CSS minifier
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
    .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
    .replace(/;\s*/g, ';') // Remove spaces after semicolons
    .trim();
}

// Read the input CSS file
const inputCSS = fs.readFileSync('./src/input.css', 'utf8');

// For now, just copy the existing styles.css to dist/output.css
const existingCSS = fs.readFileSync('./styles.css', 'utf8');
const minifiedCSS = minifyCSS(existingCSS);

// Write the output
fs.writeFileSync('./dist/output.css', minifiedCSS);

console.log('✅ CSS built successfully!');
console.log('📦 Output: dist/output.css');
console.log('🎯 Target Shot Bar ready for production!');
