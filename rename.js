//  Purpose: Rename all the screenshots programatically 
var sharp = require('sharp');
// const imageFolder = './resized/';
// var renamedFolder = './renamed/';
const fs = require('fs');
// var count = 0;
// var img_prefix = "img_"
// fs.readdirSync(imageFolder).forEach(file => {
//     fs.rename(imageFolder + file, renamedFolder + img_prefix + count + ".png", function(err) {
//         if (!fs.existsSync(renamedFolder)) {
//             fs.mkdirSync(renamedFolder);
//         }
//         if (err) {
//             console.log("FIle  " + file)
//             console.log('ERROR: ' + err);
//         } else {
//             console.log("Renamed: " + file + " -> " + img_prefix + count + ".png");
//         }
//     });
//     count++;
// });


var count = 0;
var renamedFolder2 = './blurred_renamed/';
var imageFolder2 = './temp/';
var img_prefix = "img_"

fs.readdirSync(imageFolder2).forEach(file => {
    fs.copyFileSync(imageFolder2 + file, renamedFolder2 + img_prefix + count + ".png");
    // fs.rename(imageFolder2 + file, renamedFolder2 + img_prefix + count + ".png", function(err) {
    //     if (!fs.existsSync(renamedFolder2)) {
    //         fs.mkdirSync(renamedFolder2);
    //     }
    //     if (err) {
    //         console.log("FIle  " + file)
    //         console.log('ERROR: ' + err);
    //     } else {
    //         console.log("Renamed: " + file + " -> " + img_prefix + count + ".png");
    //     }
    // });
    count++;
});