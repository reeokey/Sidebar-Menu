const Navbar = document.querySelector("nav"),
    TombolMenu = document.querySelectorAll(".menu-icon"),
    Hamparan = document.querySelector(".hamparan");

TombolMenu.forEach((TombolMenu) => {
    TombolMenu.addEventListener("click", () => {
        Navbar.classList.toggle("open");
    });
});

Hamparan.addEventListener("click", () => {
    Navbar.classList.remove("open");
});