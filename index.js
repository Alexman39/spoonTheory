document.getElementById("toggleButton").addEventListener("click", function () {
    const nav = document.getElementById("nav");
    nav.classList.toggle("visible");
    nav.classList.toggle("hidden");
});

document.getElementsByClassName("navToggle")[0].addEventListener("click", function () {
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("visible");
})

document.getElementsByClassName("navToggle")[1].addEventListener("click", function () {
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("visible");
})