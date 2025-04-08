
const hu = document.getElementById("content-hu");
const en = document.getElementById("content-en");
const button = document.getElementById("langBtn");
let isHungarian = true;
document.getElementById("btn_us").addEventListener("click", () => {
    toggleLanguage();
});
document.getElementById("btn_hun").addEventListener("click", () => {
    toggleLanguage();
});
function toggleLanguage() {
    isHungarian = !isHungarian
    hu.style.display = isHungarian ? "block" : "none";
    en.style.display = isHungarian ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", function () {
    isHungarian = !isHungarian;
    toggleLanguage();
});
