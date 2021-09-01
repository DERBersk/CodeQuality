const puppeteer = require("puppeteer");

/*
Wenn all.test.js ausgeführt wird, müssen die file-paths angepasst werden.
 */

/*
Systemtest: Testet Website, ob Addition funktioniert
*/
test("Systemtest: addition", async ()=>{
	const browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto("file:///C:/Users/domin/Documents/Repositories/CodeQuality/index.html"); // Hier
	await page.type("#num1","3");
	await page.type("#num2","2");
	await page.click("#btnpl");
	const testData = await page.$eval("#res",elem=>elem.value);
	expect(testData).toBe("5");
},10000);

/*
Systemtest: Testet Website, ob Subtraktion funktioniert
*/
test("Systemtest: substraction", async ()=>{
	const browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto("file:///C:/Users/domin/Documents/Repositories/CodeQuality/index.html"); // Hier
	await page.type("#num1","3");
	await page.type("#num2","2");
	await page.click("#btnmi");
	const testData = await page.$eval("#res",elem=>elem.value);
	expect(testData).toBe("1");
},10000);

/*
Systemtest: Testet Website, ob Division funktioniert
*/
test("Systemtest: division", async ()=>{
	const browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto("file:///C:/Users/domin/Documents/Repositories/CodeQuality/index.html"); // Hier
	await page.type("#num1","3");
	await page.type("#num2","2");
	await page.click("#btndi");
	const testData = await page.$eval("#res",elem=>elem.value);
	expect(testData).toBe("1.5");
},10000);

/*
Systemtest: Testet Website, ob Multiplikation funktioniert
*/
test("Systemtest: multiplication", async ()=>{
	const browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto("file:///C:/Users/domin/Documents/Repositories/CodeQuality/index.html"); // Hier
	await page.type("#num1","3");
	await page.type("#num2","2");
	await page.click("#btnmu");
	const testData = await page.$eval("#res",elem=>elem.value);
	expect(testData).toBe("6");
},10000);