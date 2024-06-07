document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const title = document.getElementById("title");
    const slideshow = document.getElementById("slideshow");
    const images = slideshow.getElementsByTagName("img");
    let currentIndex = 0;

    setTimeout(() => {
        loader.style.display = "none";
        content.classList.remove("hidden");
        slideshow.classList.remove("hidden");
        showSlide(currentIndex);
    }, 3000);

    function showSlide(index) {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        }
        images[index].classList.add("active");
        currentIndex = (index + 1) % images.length;
        setTimeout(() => showSlide(currentIndex), 3000);
    }
});
