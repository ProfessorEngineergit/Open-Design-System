// Drive the real running app in headless Chrome and capture three live shots:
// the mix preview, the component canvas, and the CSS inspector. These become
// the "exploded view of the real site" in the README.
const puppeteer = require('puppeteer');

const BASE = process.env.CAPTURE_BASE || 'http://localhost:5180/Open-Design-System/';
const OUT = process.argv[2] || 'docs';

const SEED = {
  projectType: 'web-app',
  basePhysics: 'apple-hig',
  styleWeights: { 'liquid-glass': 100 },
  shape: 'rounded',
  texture: 'aurora',
  typeSystem: 'editorial-italian',
  customFonts: [],
  visuals: { radius: 18, blur: 16, saturation: 165, elevation: 36, borderWidth: 1, borderOpacity: 32, noise: 0, refraction: 55, accentHue: 265 },
  notes: '',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--force-color-profile=srgb'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // seed selection, then load the app fresh
  await page.goto(BASE, { waitUntil: 'networkidle0' });
  await page.evaluate((s) => localStorage.setItem('ods.selection.v1', JSON.stringify(s)), SEED);
  await page.goto(BASE, { waitUntil: 'networkidle0' });
  await sleep(600);

  // into the editor, advance to Style Mix (step 3)
  await page.evaluate(() => document.querySelector('.hero-btn')?.click());
  await sleep(500);
  for (let i = 0; i < 2; i++) {
    await page.evaluate(() => document.querySelector('.wizard-nav .primary-btn')?.click());
    await sleep(350);
  }
  await sleep(500);

  // 1) the live mix preview
  const preview = await page.$('.mix-preview-stage');
  if (preview) await preview.screenshot({ path: `${OUT}/shot-preview.png` });

  // advance to Components (step 6)
  for (let i = 0; i < 3; i++) {
    await page.evaluate(() => document.querySelector('.wizard-nav .primary-btn')?.click());
    await sleep(350);
  }
  await sleep(700);

  // 2) the component canvas (click the stat card so the inspector is interesting)
  await page.evaluate(() => {
    const card = document.querySelector('[data-label="Stat card"]');
    if (card) card.click();
  });
  await sleep(300);
  const canvas = await page.$('.canvas-stage');
  if (canvas) await canvas.screenshot({ path: `${OUT}/shot-canvas.png` });

  // 3) the inspector panel
  const inspector = await page.$('.canvas-inspector');
  if (inspector) await inspector.screenshot({ path: `${OUT}/shot-inspector.png` });

  await browser.close();
  console.log('captured shot-preview / shot-canvas / shot-inspector into', OUT);
})().catch((e) => { console.error(e); process.exit(1); });
