// var webshot = require('webshot');
// var options = { shotSize: { height: 'all' } };


// webshot('http://creative.bauermedia.co.uk/Co-operative-botm-2019-phase3/', 'google.png', options, function(err) {
//     // screenshot now saved to google.png
// });
const fs = require('fs');
// import fullPageScreenshot from "puppeteer-full-page-screenshot";

// const url = require('url');
let rawdata = fs.readFileSync('URL_Data2.json');
let extractedData = JSON.parse(rawdata);
// console.log(student.URLs[10]);
var links = extractedData.URLs
const URL_LINKS = ["http://creative.bauermedia.co.uk/glass-jan-2019",
    "http://creative.bauermedia.co.uk/gntb", "http://creative.bauermedia.co.uk/google-garage",
    "http://creative.bauermedia.co.uk/google-garage-birmingham",
    "http://creative.bauermedia.co.uk/google-garage-clyde1"
]
var puppeteer = require('puppeteer');

var webshot = require('webshot');
var options = {
    windowSize: {
        width: 1024,
        height: 768
    },
    shotSize: {
        width: 1000,
        height: 'all'
    },
    shotOffset: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    // errorIfStatusIsNot200: true
};
// webshot(links[29], 'google.png', options, function(err) {
//     // screenshot now saved to google.png
// });
// webshot(links[50], 'google2.png', options, function(err) {
//     // screenshot now saved to google.png
// });

// (async function screenShot() {
//     try {
//         for (c = 0; c < 30; c++) {
//             await webshot(links[c], "./images/" + links[c] + '.png', options, function(err) {});

//         }
//         // await webshot(links[22], 'google2.png', options, function(err) {});
//     } catch (error) {
//         console.log("Error Handling :" + error)
//     }
// })();


var fullPageScreenshot = require('puppeteer-full-page-screenshot');

// console.log(URL_LINKS[0])
// const myURL = new URL('https://example.org');
// console.log(myURL.protocol);


// for (let eachLink of URL_LINKS) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setViewport({
//         width: 1400,
//         height: 1000,
//     });
//     const options = {
//         path: "images/website.png",
//         fullPage: true,
//         omitBackground: true
//     }
//     await page.goto(eachLink)
//     await page._client.send('Animation.setPlaybackRate', { playbackRate: 10 });
//     const screen = await page.screenshot(options);
//     await browser.close();

//     // await expect(screen).toMatchImageSnapshot();
// };

// for (i = 0; i < URL_LINKS.length; i++) {
//     console.log("Test " + URL_LINKS[i]);
//     (async() => {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.setViewport({
//             width: 1400,
//             height: 1000,
//         });
//         const options = {
//             path: "images/website.png",
//             fullPage: true,
//             omitBackground: true
//         }
//         console.log(URL_LINKS[i])
//         await page.goto(URL_LINKS[i]);
//         await page._client.send('Animation.setPlaybackRate', { playbackRate: 10 });

//         await page.screenshot(options);

//         await browser.close();
//     })();
// }




// for (i in links) {
//     console.log(links[i]);
//     (async() => {
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.setViewport({
//             width: 1400,
//             height: 1000,
//         });
//         const options = {
//             path: "images/website.png",
//             fullPage: true,
//             omitBackground: true
//         }

//         await page.goto(student.URLs[70]);
//         await page._client.send('Animation.setPlaybackRate', { playbackRate: 10 });

//         await page.screenshot(options);

//         await browser.close();
//     })();
// }



// console.log(fullPageScreenshot);
// (async function screenShot() {

//     try {
//         var browser = await puppeteer.launch({
//             headless: false
//         });
//         var page = await browser.newPage();
//         await page.setViewport({
//             width: 1460,
//             height: 1000
//         });
//         var options;
//         for (c = 0; c < 30; c++) {

//             console.log("Fetching: ", links[29])
//                 // const chapterUrl = URL_LINKS[c];
//                 // const bodyHandle = await page.$('body');
//                 // const { width, height } = await bodyHandle.boundingBox();
//             options = {
//                 path: "images/sadasdasdwebsite" + c + ".png",
//                 // fullPage: true,
//                 // omitBackground: true
//             };
//             await page.goto(links[29], { waitUntil: 'load', timeout: 0 });
//             await page._client.send('Animation.setPlaybackRate', {
//                 playbackRate: 10
//             });
//             // await page.screenshot(options);
//             // try {
//             await fullPageScreenshot(page, { path: "images/sadasdasdwebsite" });
//             // } catch (fullPageErr) {
//             // console.log(fullPageErr)
//             // }

//         }
//         // await bodyHandle.dispose();
//         await browser.close();

//     } catch (error) {
//         console.log("Error Handling :" + error)
//     }
// })();


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


        console.log("Fetching: ", links[29])
            // const chapterUrl = URL_LINKS[c];
            // const bodyHandle = await page.$('body');

        const bodyHandle = await page.$('body');
        const bounding_box = await bodyHandle.boundingBox();

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
            // await page.screenshot(options);
            await page.screenshot(
                options
                // clip: {
                //     x: bounding_box.x,
                //     y: bounding_box.y,
                //     width: Math.min(bounding_box.width, page.viewport().width),
                //     height: Math.min(bounding_box.height, page.viewport().height),
                // }
            );
        }

        //         for (c = 0; c < 30; c++) {

        //             console.log("Fetching: ", links[29])
        //                 // const chapterUrl = URL_LINKS[c];
        //                 // const bodyHandle = await page.$('body');
        //                 // const { width, height } = await bodyHandle.boundingBox();
        //             options = {
        //                 path: "images/sadasdasdwebsite" + c + ".png",
        //                 // fullPage: true,
        //                 // omitBackground: true
        //             };
        //             await page.goto(links[29], { waitUntil: 'load', timeout: 0 });
        //             await page._client.send('Animation.setPlaybackRate', {
        //                 playbackRate: 10
        //             });
        //             // await page.screenshot(options);
        //             // try {
        //             await fullPageScreenshot(page, { path: "images/sadasdasdwebsite" });
        //             // } catch (fullPageErr) {
        //             // console.log(fullPageErr)
        //             // }

        //         }
        // try {
        // await fullPageScreenshot(page, { path: "images/sadasdasdwebsite" });
        // } catch (fullPageErr) {
        // console.log(fullPageErr)
        // }


        await browser.close();
        await bodyHandle.dispose();

    } catch (error) {
        console.log("Error Handling :" + error)
    }
})();