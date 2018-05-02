var i = 0; //Start point of start index
var images = [];
var time = 3000;

// image list

images[0] = 'http://unsplash.it/400/200';
images[1] = "http://placekitten.com/400/200";
images[2] = 'http://unsplash.it/g/400/200?random';
images[3] = "http://unsplash.it/400/200?random";

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
