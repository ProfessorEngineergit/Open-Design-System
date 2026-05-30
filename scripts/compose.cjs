// Compose the three real screenshots into one exploded-view montage PNG.
// Loads a local HTML layout (PNGs embedded as base64) and rasterizes it.
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DOCS = path.join(__dirname, '..', 'docs');
const b64 = (f) => 'data:image/png;base64,' + fs.readFileSync(path.join(DOCS, f)).toString('base64');

const preview = b64('shot-preview.png');
const canvas = b64('shot-canvas.png');
const inspector = b64('shot-inspector.png');

const html = `<!doctype html><html><head><meta charset="utf8">
<style>
  * { margin:0; box-sizing:border-box; }
  body { width:1500px; height:900px; background:#efece3; font-family:'Inter',system-ui,sans-serif; position:relative; overflow:hidden; }
  .frame { position:absolute; border-radius:16px; overflow:hidden; box-shadow:0 22px 50px rgba(26,24,20,0.22); border:1px solid rgba(26,24,20,0.08); background:#fff; }
  .frame img { display:block; width:100%; }
  .tag { position:absolute; background:#cc785c; color:#fff; font-size:15px; font-weight:600; padding:5px 12px; border-radius:8px; white-space:nowrap; box-shadow:0 4px 10px rgba(26,24,20,0.18); }
  .lead { position:absolute; stroke:#cc785c; stroke-width:2; stroke-dasharray:3 6; fill:none; opacity:0.55; }
  .cap { position:absolute; color:#1a1814; }
  .cap b { display:block; font-size:17px; font-weight:700; }
  .cap span { font-size:13px; color:#5c574c; }
</style></head><body>

  <svg width="1500" height="900" style="position:absolute;inset:0;pointer-events:none">
    <polyline class="lead" points="430,640 560,470 690,300"/>
    <polyline class="lead" points="250,250 250,250"/>
  </svg>

  <!-- canvas (back) -->
  <div class="frame" style="left:560px; top:170px; width:760px;">
    <img src="${canvas}">
  </div>
  <div class="tag" style="left:560px; top:140px;">The component canvas — your whole look, on real components</div>

  <!-- inspector (mid-right) -->
  <div class="frame" style="left:1140px; top:470px; width:330px;">
    <img src="${inspector}">
  </div>
  <div class="tag" style="left:1140px; top:440px;">Click any element → its resolved CSS</div>

  <!-- preview (front) -->
  <div class="frame" style="left:90px; top:430px; width:520px;">
    <img src="${preview}">
  </div>
  <div class="tag" style="left:90px; top:400px;">The live mix preview — Look + Shape + Texture</div>

  <!-- title -->
  <div class="cap" style="left:90px; top:120px; width:430px;">
    <b style="font-size:34px; font-family:'Fraunces',Georgia,serif; line-height:1.1;">This is the real thing.</b>
    <span style="font-size:16px; display:block; margin-top:10px; line-height:1.5;">Every panel below is a live screenshot of Looksmith itself — the same preview, canvas and inspector you get in the editor.</span>
  </div>

</body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--force-color-profile=srgb'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1500, height: 900, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: path.join(DOCS, 'exploded-real.png') });
  await browser.close();
  console.log('composed docs/exploded-real.png');
})().catch((e) => { console.error(e); process.exit(1); });
