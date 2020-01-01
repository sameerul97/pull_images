var sharp = require('sharp');

// sharp('2.jpg')
//     // .resize(300, 200)
//     .blur(30)
//     .toFile('output22.jpg', function(err) {
//         // output.jpg is a 300 pixels wide and 200 pixels high image
//         // containing a scaled and cropped version of input.jpg
//     });

// sharp('./img/airplane.jpg')
//     .resize(1600, null)
//     .blur(30)
//     .toFile('./blur/airplane_30.jpg', function(err) {
//         // output.jpg is a 300 pixels wide and 200 pixels high image
//         // containing a scaled and cropped version of input.jpg
//     });

// const testFolder = './img';
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
//     console.log(file);
//     sharp("./img/" + file)
//         // .resize(300, 200)
//         .blur(30)
//         // .toFile('output22.jpg', function(err) {

//     .toFile('./blur/blurred_' + file + '.jpg', function(err) {
//         // output.jpg is a 300 pixels wide and 200 pixels high image
//         // containing a scaled and cropped version of input.jpg
//     });
// });

// fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//         sharp(file)
//             // .resize(300, 200)
//             .blur(30)
//             .toFile('output22.jpg', function(err) {

//                 // .toFile("./blur/" + file + 'blur.jpg', function(err) {
//                 // output.jpg is a 300 pixels wide and 200 pixels high image
//                 // containing a scaled and cropped version of input.jpg
//             });
//     });
// });



//  Purpose: Resize all the screenshots programatically 
var sharp = require('sharp');
const imageFolder = './resized/';
var blurryFolder = './blurred/';
const fs = require('fs');
fs.readdirSync(imageFolder).forEach(file => {
    console.log(file);
    if (!fs.existsSync(blurryFolder)) {
        fs.mkdirSync(blurryFolder);
    }
    sharp(imageFolder + file)
        .blur(50)
        .resize(780, null)
        .jpeg({
            quality: 50,
            chromaSubsampling: '4:4:4'
        })
        .toFile(blurryFolder + file, function(err) {});
});