const fs = require('fs');
// const url = require('url');
let rawdata = fs.readFileSync('URL_Data2.json');
let extractedData = JSON.parse(rawdata);
var links = extractedData.URLs;
const imageFolder = './images/';
const URL_LINKS = ["http://creative.bauermedia.co.uk/glass-jan-2019",
    "http://creative.bauermedia.co.uk/gntb", "http://creative.bauermedia.co.uk/google-garage",
    "http://creative.bauermedia.co.uk/google-garage-birmingham",
    "http://creative.bauermedia.co.uk/google-garage-clyde1"
]
var puppeteer = require('puppeteer');
(async function screenShot() {
    try {
        var browser = await puppeteer.launch({
            headless: true
        });
        var page = await browser.newPage();
        await page.setViewport({
            width: 1440,
            height: 1080
        });
        var options;
        if (!fs.existsSync(imageFolder)) {
            fs.mkdirSync(imageFolder);
        }
        for (c = 0; c < links.length; c++) {
            console.log(links[c], typeof(links[c]))
            const myURL = new URL(links[c]);
            console.log(myURL.pathname);
            options = {
                path: "images/" + myURL.pathname + '.png',
                fullPage: true,
                omitBackground: true
            };
            await page.goto(links[c], { waitUntil: 'load', timeout: 0 });
            await page._client.send('Animation.setPlaybackRate', {
                playbackRate: 10
            });
            await page.screenshot(options);
        }
        await browser.close();
    } catch (error) {
        console.log("Error Handling :" + error)
    }
})();