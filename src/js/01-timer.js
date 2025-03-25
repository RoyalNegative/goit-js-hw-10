import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

console.log("calisiyor");
const flatpickrInput = document.querySelector("#datetime-picker");

const startbtn = document.querySelector("[data-start]");

startbtn.addEventListener("click", () => {
    console.log("tus da calisiyor");
});


flatpickrInput = flatpickr("#datetime-picker", {});