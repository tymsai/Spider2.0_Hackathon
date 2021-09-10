// File input
window.addEventListener('load', function(){
    document.querySelector('input[type="file"]').addEventListener('change', function(){
        if (this.files && this.files[0]){
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(this.files[0]); 
        }
    });
});   
// Image Edit
const x = document.getElementById("myimg");
const y = document.getElementById("reset");
const z = document.getElementById("s1");
const t = document.getElementById("bright");
const a = document.getElementById("s2");
const o = document.getElementById("contrast");
const b = document.getElementById("s3");
const v3 = document.getElementById("saturate");
const d = document.getElementById("s5");
const v5 = document.getElementById("invert");
const c = document.getElementById("s4");
const v4 = document.getElementById("gray");
var brightness = 100;
var contrast = 100;
var saturate = 100;
var invert = 0;
var grayscale = 0;

function filterapplied(){
    x.style.filter = "brightness(" + brightness + "%) contrast(" + contrast + "%) saturate(" + saturate + "%) grayscale(" + grayscale + "%) invert(" + invert + "%)";
}
    
y.addEventListener("click", function(){
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
    filterapplied();
});
//Brightness 
z.addEventListener("input", function(){
console.log(z.value);
brightness = z.value;
filterapplied();
});
//Contrast 
a.addEventListener("input", function(){
contrast = a.value;
filterapplied();
});
//Saturation 
b.addEventListener("input", function(){
saturate = b.value;
filterapplied();
});
//Grayscale 
c.addEventListener("input", function(){
grayscale = c.value;
filterapplied();
});
//Invert 
d.addEventListener("input", function(){
invert = d.value;
filterapplied();
});