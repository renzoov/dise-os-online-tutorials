const section = document.querySelector("section");
const arrayIcons = [
  "fa-solid fa-user-ninja",
  "fa-solid fa-book",
  "fa-solid fa-computer",
  "fa-brands fa-js",
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-react",
  "fa-brands fa-angular",
  "fa-brands fa-vuejs",
  "fa-solid fa-database",
  "fa-solid fa-dog",
  "fa-solid fa-futbol",
  "fa-solid fa-gamepad",
  "fa-solid fa-music",
  "fa-solid fa-computer-mouse",
  "fa-solid fa-person-swimming",
  "fa-solid fa-mobile-screen",
  "fa-solid fa-wallet",
  "fa-solid fa-key",
  "fa-solid fa-ice-cream",
];

const count = 20;

document.addEventListener("DOMContentLoaded", createRows);

function createRows() {
  for (let i = 1; i <= count; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 1; j <= 2; j++) {
      const div = document.createElement("div");
      iconRows(div);
      row.appendChild(div);
    }

    section.appendChild(row);
  }
}

function iconRows(div) {
  for (let j = 0; j < count; j++) {
    let icon = document.createElement("i");

    let icons = arrayIcons[j].split(" ");
    icon.classList.add(icons[0], icons[1]);
    div.appendChild(icon);
  }
}
