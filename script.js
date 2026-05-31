const slides = [
    "image/image07.jpg",
    "image/image10.webp",
    "image/image13.webp",
    "image/image15.jpg",
    "image/image17.jpeg"
];

document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        alert("Форма заполнена верно");
        form.reset();
    });
});

const slider = document.querySelector("[data-slider]");

if (slider) {
    let index = 0;
    const image = slider.querySelector("img");

    const show = (step) => {
        index = (index + step + slides.length) % slides.length;
        image.src = slides[index];
    };

    slider
        .querySelector("[data-prev]")
        .addEventListener("click", () => show(-1));

    slider
        .querySelector("[data-next]")
        .addEventListener("click", () => show(1));

    setInterval(() => show(1), 4000);
}
