// function function1() {
//     console.log("1")
// }

// function function2() {
//     console.log("2");
//     setTimeout(function() {
//         for (i = 0; i < 100; i++) {
//             console.log(i)
//         }
//     }, 100)
// }

// function function3() {
//     console.log("3")
// }

// async function main() {
//     var func1 = await function1();
//     var func2 = await function2();
//     var func3 = await function3();
// }
// main();
// function1();
// function2();
// function3();

// #### Example 2 callbacks #######
// function one(callback) {
//     // setTimeout(function() {
//     console.log("first function executing");
//     //   callback();
//     // }, 3000);
//     setTimeout(function() {
//         for (i = 0; i < 10000; i++) {
//             // console.log(i)
//         }
//         console.log("first function executed");

//         callback();
//     }, 1000)
// }

// function two(callback) {
//     console.log("second function executing");
//     setTimeout(function() {
//         for (i = 0; i < 10000; i++) {
//             // console.log(i)
//         }
//         console.log("second function timeout executed");

//         callback();
//     }, 500)
// }

// function three() {
//     console.log("3rd Function")
// }

// one(two(three))


// var fetch = require('node-fetch')
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// Example 3 ############
// var async = require('async');
// async.waterfall([
//     function(callback) {
//         console.log("first function executing");
//         setTimeout(function() {
//             for (i = 0; i < 10000; i++) {
//             }
//             console.log("first function executed");
//             callback(null, 'one', 'two');
//         }, 1000)
//     },
//     function(param1, param2, callback) {
//         console.log("second function executing");
//         setTimeout(function() {
//             for (i = 0; i < 10000; i++) {
//             }
//             console.log("second function timeout executed");
//             callback(null, 'three');
//         }, 500)
//     },
//     function(param1, callback) {
//         console.log("3rd Function")

//         callback(null, 'done');
//     },
//     function(param1, callback) {
//         console.log("4th Function executing")
//         setTimeout(function() {
//             for (i = 0; i < 10000; i++) {
//             }
//             console.log("4th Function timeout executed");
//             callback(null, 'three');
//         }, 500)
//     }
// ], function(err, result) {
//     console.log("All Function are excuted")
// });

// Example 4 ############
var data = ["http://creative.bauermedia.co.uk/-home", "http://creative.bauermedia.co.uk/21bridges-nov-2019", "http://creative.bauermedia.co.uk/42nd-street", "http://creative.bauermedia.co.uk/9-to-5", "http://creative.bauermedia.co.uk/9to5-jan19", "http://creative.bauermedia.co.uk/Co-operative-botm-2019-phase2", "http://creative.bauermedia.co.uk/Co-operative-botm-2019-phase3", "http://creative.bauermedia.co.uk/Co-operativeBank-2019", "http://creative.bauermedia.co.uk/Co-operativeBank-Pride2019", "http://creative.bauermedia.co.uk/Co-operativeBank-Pride2019-Phase2", "http://creative.bauermedia.co.uk/Co-operativeBank-Pride2019-Phase3", "http://creative.bauermedia.co.uk/Co-operativeBank-botm-2019", "http://creative.bauermedia.co.uk/GNTO", "http://creative.bauermedia.co.uk/Kiss100-master", "http://creative.bauermedia.co.uk/Magic-of-Xmas-2019", "http://creative.bauermedia.co.uk/Terminator_Dark_Fate", "http://creative.bauermedia.co.uk/a-simple-favour-england", "http://creative.bauermedia.co.uk/a-simple-favour-kiss", "http://creative.bauermedia.co.uk/a-simple-favour-scotland", "http://creative.bauermedia.co.uk/a-star-is-born", "http://creative.bauermedia.co.uk/a-star-is-born-v3", "http://creative.bauermedia.co.uk/a-united-kingdom", "http://creative.bauermedia.co.uk/aa", "http://creative.bauermedia.co.uk/absolute-embed", "http://creative.bauermedia.co.uk/absolute-live-2018", "http://creative.bauermedia.co.uk/absolute-mission-christmas-2017", "http://creative.bauermedia.co.uk/absolute-radio-palladium", "http://creative.bauermedia.co.uk/absolutebreakfast", "http://creative.bauermedia.co.uk/ad-astra", "http://creative.bauermedia.co.uk/adogswayhome-magic-jan-2019", "http://creative.bauermedia.co.uk/adops", "http://creative.bauermedia.co.uk/adviewer", "http://creative.bauermedia.co.uk/alien-absolute", "http://creative.bauermedia.co.uk/alien-bcn-absolute", "http://creative.bauermedia.co.uk/all-eyez-on-me"]
var async = require('async');
var links = [];
var totalFiles;
const fs = require('fs');

async.waterfall([
    getURLs,
    fetchImages,
    resizeImages,
    blurImages,
], function(err, result) {
    // result now equals 'done'
    var output = { "URLs": links }
    console.log(result);
    fs.writeFileSync('./links.json', JSON.stringify(output));

    process.exit()
});

function getURLs(callback) {
    const testFolder = './resized/';
    const path = require('path');
    var count = 0;
    fs.readdir(testFolder, (err, files) => {
        totalFiles = files.length;
    });

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            var filename = file;
            links.push(path.parse(filename).name);
            count++;

            // if (count > totalFiles) {
            if (count == 66) {
                console.log(links)
                callback(null);
            }
        });
    });

}

function fetchImages(callback) {
    takeScreenShots();
    async function takeScreenShots() {
        var noOfScreenShots = 0;
        const imageFolder = './testImages/'
        var puppeteer = require('puppeteer')
        try {
            var browser = await puppeteer.launch({
                headless: true
            })
            var page = await browser.newPage()
            await page.setViewport({
                width: 1440,
                height: 1080
            })
            var options
            if (!fs.existsSync(imageFolder)) {
                fs.mkdirSync(imageFolder)
            }
            // for (c = 0; c < links.length; c++) {
            for (c = 0; c < 66; c++) {
                // console.log(noOfScreenShots)
                // console.log(links[c], typeof links[c])
                const myURL = new URL("http://creative.bauermedia.co.uk/" + links[c])
                var tempLink = "http://creative.bauermedia.co.uk/" + links[c]
                console.log(myURL.pathname, tempLink)
                options = {
                        path: imageFolder + myURL.pathname + '.png',
                        fullPage: true,
                        omitBackground: true
                    }
                    // await page.goto(tempLink, { waitUntil: 'load', timeout: 0 })
                    // await page._client.send('Animation.setPlaybackRate', {
                    //     playbackRate: 10
                    // })
                    // await page.screenshot(options)
                noOfScreenShots++;
            }
            await browser.close()
                // if (true) {
            if (noOfScreenShots == 66) {
                callback(null, 'one', 'two');
            }
        } catch (error) {
            console.log('Error Handling :' + error)
        }
    }
}

function resizeImages(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    var count = 0;

    console.log("Resizing Images");
    var sharp = require('sharp');
    const imageFolder = './testImages/';
    var resized_for_web = './resized_for_web/';
    const fs = require('fs');
    fs.readdirSync(imageFolder).forEach(file => {
        console.log(file);
        if (!fs.existsSync(resized_for_web)) {
            fs.mkdirSync(resized_for_web);
        }
        sharp(imageFolder + file)
            .resize(780, null)
            .jpeg({
                quality: 50,
                chromaSubsampling: '4:4:4'
            })
            .toFile(resized_for_web + file, function(err) {});
        count++;
        if (count == 66) {
            callback(null, 'one', 'two');
        }
    });

}

function blurImages(arg1, callback) {
    // arg1 now equals 'three'
    Blur();
    async function Blur() {
        var count = 0;

        console.log("Blurrung Images");
        var sharp = require('sharp');
        const imageFolder = './resized_for_web/';
        var blurred_for_web = './blurred_for_web/';
        const fs = require('fs');
        fs.readdirSync(imageFolder).forEach(file => {
            console.log(file);
            if (!fs.existsSync(blurred_for_web)) {
                fs.mkdirSync(blurred_for_web);
            }
            sharp(imageFolder + file)
                .blur(50)
                .resize(780, null)
                .jpeg({
                    quality: 50,
                    chromaSubsampling: '4:4:4'
                })
                .toFile(blurred_for_web + file, function(err) {
                    count++;
                    console.log(count)
                    if (count == 66) {
                        callback(null, 'one', 'two');
                    }
                });
        });

        function test() {
            callback(null, 'one', 'two');
        }
    }


    // callback(null, 'done');
}