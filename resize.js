//  Purpose: Resize all the screenshots programatically 
var sharp = require('sharp');
const imageFolder = './images/';
var blurryFolder = './resized/';
const fs = require('fs');
fs.readdirSync(imageFolder).forEach(file => {
    console.log(file);
    if (!fs.existsSync(blurryFolder)) {
        fs.mkdirSync(blurryFolder);
        sharp("./images/" + file)
            .resize(780, null)
            .jpeg({
                quality: 50,
                chromaSubsampling: '4:4:4'
            })
            .toFile(blurryFolder + file, function(err) {});
    } else {
        sharp("./images/" + file)
            .resize(780, null)
            .jpeg({
                quality: 50,
                chromaSubsampling: '4:4:4'
            })
            .toFile(blurryFolder + file, function(err) {});
    }
});