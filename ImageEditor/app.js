window.addEventListener('load', function() {
        document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);
          }
          img.src = URL.createObjectURL(this.files[0]); 
      }
    });
    });   


let brightness = 100;
let contrast = 100;
let saturate = 100;
let grayscale = 0;
let invert = 0;

const imgture = document.getElementById("myimg");
const resetAll = document.getElementById("resetAll");

const slider1 = document.getElementById("slider1");
const value1 = document.getElementById("bright");
const slider2 = document.getElementById("slider2");
const value2 = document.getElementById("contrast");
const slider3 = document.getElementById("slider3");
const value3 = document.getElementById("saturate");
const slider4 = document.getElementById("slider4");
const value4 = document.getElementById("gray");
const slider5 = document.getElementById("slider5");
const value5 = document.getElementById("invert");


//Update filters
function updateFilters() {
imgture.style.filter =
    "brightness(" +
    brightness +
    "%) contrast(" +
    contrast +
    "%) saturate(" +
    saturate +
    "%) grayscale(" +
    grayscale +
    "%) invert(" +
    invert +
    "%)";
}
//Reset All
resetAll.addEventListener("click", function() {
console.log("resset");
brightness = 100;
slider1.value = 100;
value1.innerHTML = slider1.value + "%";
contrast = 100;
slider2.value = 100;
value2.innerHTML = slider2.value + "%";
saturate = 100;
slider3.value = 100;
value3.innerHTML = slider3.value + "%";
grayscale = 0;
slider4.value = 0;
value4.innerHTML = slider4.value + "%";
invert = 0;
slider5.value = 0;
value5.innerHTML = slider5.value + "%";
updateFilters();
});

//Brightness slider
slider1.addEventListener("input", function() {
console.log(slider1.value);
value1.innerHTML = slider1.value + "%";
brightness = slider1.value;
updateFilters();
});

slider1.addEventListener("focus", function() {
console.log("focus gotten");
value1.style.visibility = "visible";
});

slider1.addEventListener("blur", function() {
console.log("focus lost");
value1.style.visibility = "hidden";
});

//Contrast slider
slider2.addEventListener("input", function() {
value2.innerHTML = slider2.value + "%";
contrast = slider2.value;
updateFilters();
});

slider2.addEventListener("focus", function() {
value2.style.visibility = "visible";
});

slider2.addEventListener("blur", function() {
value2.style.visibility = "hidden";
});

//Saturation slider
slider3.addEventListener("input", function() {
value3.innerHTML = slider3.value + "%";
saturate = slider3.value;
updateFilters();
});

slider3.addEventListener("focus", function() {
value3.style.visibility = "visible";
});

slider3.addEventListener("blur", function() {
value3.style.visibility = "hidden";
});


//Grayscale slider
slider4.addEventListener("input", function() {
value4.innerHTML = slider4.value + "%";
grayscale = slider4.value;
updateFilters();
});

slider4.addEventListener("focus", function() {
value4.style.visibility = "visible";
});

slider4.addEventListener("blur", function() {
value4.style.visibility = "hidden";
});

//Invert slider
slider5.addEventListener("input", function() {
value5.innerHTML = slider5.value + "%";
invert = slider5.value;
updateFilters();
});

slider5.addEventListener("focus", function() {
value5.style.visibility = "visible";
});

slider5.addEventListener("blur", function() {
value5.style.visibility = "hidden";
});
