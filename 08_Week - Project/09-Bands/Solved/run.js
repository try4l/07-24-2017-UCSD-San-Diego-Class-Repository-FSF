// Gets the myBands object from the bands file.
var bandList = require("./bands.js");

var yourBands = {
  punk1: "Green Day",
  rap1: "Run DMC",
  classic1: "Led Zeppelin"
}

// Loop through band list and print out details
for (var key in bandList) {
  console.log("A " + key + " band is " + bandList[key] + ".");
}


