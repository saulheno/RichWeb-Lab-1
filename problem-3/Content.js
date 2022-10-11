//array of images
let myImages = [
    "https://i.kym-cdn.com/photos/images/newsfeed/001/519/479/30c.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/032/558/temp6.jpg"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * myImages.length)
    imgs[i].src = myImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "I showed you my PC pls respond";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Im thinking about retiring.";
}

const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < p.length; i++){
    h3[i].innerText = "Coltons Fired";
}