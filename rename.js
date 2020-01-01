//  Purpose: Rename all the screenshots programatically 
var sharp = require('sharp');
const imageFolder = './resized/';
var renamedFolder = './renamed/';
const fs = require('fs');
var count = 1;
var img_prefix = "img_"
fs.readdirSync(imageFolder).forEach(file => {
    fs.rename(imageFolder + file, renamedFolder + img_prefix + count + ".png", function(err) {
        if (err) {
            console.log("FIle  " + file)
            console.log('ERROR: ' + err);
        } else {
            console.log("Renamed: " + file + " -> " + img_prefix + count + ".png");
        }
    });
    count++;
});