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
const x = document.getElementById("myimg");
const y = document.getElementById("resetAll");
const z = document.getElementById("slider1");
const t = document.getElementById("bright");
const a = document.getElementById("slider2");
const o = document.getElementById("contrast");
const b = document.getElementById("slider3");
const v3 = document.getElementById("saturate");
const c = document.getElementById("slider4");
const v4 = document.getElementById("gray");
const d = document.getElementById("slider5");
const v5 = document.getElementById("invert");


//Update filters
function updateFilters() {
x.style.filter =
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
var brightness = 100;
var contrast = 100;
var saturate = 100;
var grayscale = 0;
var invert = 0;

//Reset All
y.addEventListener("click", function() {
console.log("resset");
brightness = 100;
z.value = 100;
contrast = 100;
a.value = 100;
saturate = 100;
b.value = 100;
grayscale = 0;
c.value = 0;
invert = 0;
d.value = 0;
updateFilters();
});

//Brightness slider
z.addEventListener("input", function() {
console.log(z.value);
brightness = z.value;
updateFilters();
});


//Contrast slider
a.addEventListener("input", function() {
contrast = a.value;
updateFilters();
});



//Saturation slider
b.addEventListener("input", function() {
saturate = b.value;
updateFilters();
});



//Grayscale slider
c.addEventListener("input", function() {
grayscale = c.value;
updateFilters();
});

//Invert slider
d.addEventListener("input", function() {
invert = d.value;
updateFilters();
});

