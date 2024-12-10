//Скрипт для меню
const btn = document.querySelector("#menu_btn");
const menu = document.querySelectorAll(".menu__item_phone");

btn.addEventListener("click", () => {
    menu.forEach((btn, i) => {
        menu[i].classList.toggle("_disp");
    });
});

// Скрипт для прокрутки
$(".slow-scroll").on("click", function (event) {
    event.preventDefault();
    const blockID = $(this).attr("href");
    $(blockID)[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});