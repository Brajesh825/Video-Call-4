const fs = require('fs');
const PurgeCSS = require('purgecss');

const htmlContent = fs.readFileSync('input.html', 'utf8');
const cssContent = fs.readFileSync('input.css', 'utf8');

const purgeCSSResult = new PurgeCSS({
  content: [{ raw: htmlContent }],
  css: [{ raw: cssContent }],
  fontFace: false, // Disable removing @font-face rules if needed
});

const optimizedCSS = purgeCSSResult[0].css;

fs.writeFileSync('output.css', optimizedCSS, 'utf8');
console.log('Unused CSS removed and saved to output.css');