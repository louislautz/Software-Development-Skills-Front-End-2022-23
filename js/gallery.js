var slideIndex = 0;
var slideshows = Array.from(document.getElementsByClassName("slideshow-container"));

for (i = 0; i < slideshows.length; i++) {
    //set custom data attribute to first current image index
    slideshows[i].setAttribute("data-currentslide", slideIndex);
    showImage(parseInt(slideshows[i].getAttribute("data-currentslide")), i);

    var tempSlides = slideshows[i].getElementsByClassName("slide");
    if (tempSlides.length == 1) {
        var tempButtons = slideshows[i].querySelectorAll("button");
        tempButtons.forEach(button => {
            button.style.display = "none";
        });
    }
}

function showImage(imageIndex, slideShowIndex) {
    var slides = Array.from(slideshows[slideShowIndex].getElementsByClassName("slide"));
    var counter = slideshows[slideShowIndex].getElementsByClassName("image-counter")[0];

    // Wraps the pictures over
    if (imageIndex > slides.length - 1){
        imageIndex = 0;
    }
    if (imageIndex < 0){
        imageIndex = slides.length - 1;
    }

    slides.forEach((element, index) => {
        if (index == imageIndex) {
            element.className += " active";
        } else {
            element.classList.remove("active");
        }
    });
    slideshows[slideShowIndex].setAttribute("data-currentslide", imageIndex);
    counter.innerHTML = `${imageIndex + 1}/${slides.length}`
}


function prevImage(element) {
    const slideShowIndex = slideshows.indexOf(element.parentElement.parentElement);
    showImage(parseInt(slideshows[slideShowIndex].getAttribute("data-currentslide")) - 1, slideShowIndex)
}

function nextImage(element) {
    const slideShowIndex = slideshows.indexOf(element.parentElement.parentElement);
    showImage(parseInt(slideshows[slideShowIndex].getAttribute("data-currentslide")) + 1, slideShowIndex)
}