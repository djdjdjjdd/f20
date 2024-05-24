// hiển thị mặc định 1 slide nao do
let currentSlideIndex = 1;
// tác dug xử lí logic hiện thị 1 slide trong danh sách slide
// xác định slide nào được hiển thị
// input index của slide muốn hiể thị
// out put: hiển thị đươc slide mong muốn
function showSlides(slideIndex) {
    let i;
    // truy xuất ra các elemnet slide
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName('dot');
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    currentSlideIndex = slideIndex;
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
showSlides(currentSlideIndex);
function plusSlides(n) {
    currentSlideIndex = currentSlideIndex + 1;
    showSlides(currentSlideIndex);
}
function currentSlide(n) {
    currentSlideIndex = n;
    showSlides(currentSlideIndex);
}