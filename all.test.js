const puppeteer = require('puppeteer');

test('end2end: addition', async ()=>{
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('file:///C:/Users/domin/Documents/Repositories/CodeQuality/index.html');
  await page.type('#num1','3');
  await page.type('#num2','2');
  await page.click('#btnpl');
  const testData = await page.$eval('#res',el=>el.value);
  expect(testData).toBe('5');
},10000);

test('end2end substraction', async ()=>{
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('file:///C:/Users/domin/Documents/Repositories/CodeQuality/index.html');
  await page.type('#num1','3');
  await page.type('#num2','2');
  await page.click('#btnmi');
  const testData = await page.$eval('#res',el=>el.value);
  expect(testData).toBe('1');
},10000);