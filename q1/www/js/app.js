function overlay_on() {
  document.getElementById("overlay").style.display = "block";
}




function overlay_off() {
  document.getElementById("overlay").style.display = "none";

}



var imgArray = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
  "img/image5.jpg",
  "img/image6.jpg",
  "img/image7.jpg",
  "img/image8.jpg",
  "img/image9.jpg",
  "img/image10.jpg",
  "img/image11.jpg",
  "img/image12.jpg",
  "img/image13.jpg",
  "img/image14.jpg",
  "img/image15.jpg"
]



function overlay_getimage(x) {
  document.getElementById("overlay_image").src=imgArray[x];
}
