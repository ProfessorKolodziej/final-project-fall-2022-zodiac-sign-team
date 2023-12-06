// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)



var check = document.querySelectorAll(".good input")
var btn = document.querySelector("button")
var a = document.querySelector("a")
console.log(check)
var count = 0

btn.addEventListener('click', function () {
    let count = 0; 
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        alert("If you don't have an idea, just look at the answer");
        console.log(count);
        
    } else {
        alert("Check your answers!");
    }
});

