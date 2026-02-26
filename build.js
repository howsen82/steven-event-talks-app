const fs = require('fs');
const path = require('path');

const inputHtmlPath = path.join(__dirname, 'index.html');
const inputCssPath = path.join(__dirname, 'style.css');
const inputJsPath = path.join(__dirname, 'script.js');
const outputHtmlPath = path.join(__dirname, 'dist', 'index.html');

// Read files
const htmlContent = fs.readFileSync(inputHtmlPath, 'utf8');
const cssContent = fs.readFileSync(inputCssPath, 'utf8');
const jsContent = fs.readFileSync(inputJsPath, 'utf8');

// Inject CSS and JS into HTML
const finalHtmlContent = htmlContent
    .replace('</head>', `<style>${cssContent}</style></head>`)
    .replace('</body>', `<script>${jsContent}</script></body>`);

// Write the combined HTML to the dist folder
fs.writeFileSync(outputHtmlPath, finalHtmlContent, 'utf8');

console.log('Website compiled successfully into dist/index.html');
