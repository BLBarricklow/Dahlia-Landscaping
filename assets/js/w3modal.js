var modal = document.getElementById("myModal");
// var img = document.getElementById("myImg");

// mix of w3schools modal image tutorial and dev.to Saleh Mubashar image modal w js
const images = document.querySelectorAll("#myImg")
console.log(images)
let imgSrc;

images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerHTML = this.alt;
    })
})

var modalImg = document.getElementById('img01');
var captionText = document.getElementById("caption");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}