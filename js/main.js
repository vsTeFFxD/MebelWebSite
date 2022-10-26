const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");

const arr = [
  (navLink1 = document.querySelector("#nav-link1")),
  (navLink2 = document.querySelector("#nav-link2")),
  (navLink3 = document.querySelector("#nav-link3")),
  (navLink3 = document.querySelector("#nav-link4")),
];

navBtn.onclick = () => {
  console.log("Кнопка нажата!");
  nav.classList.toggle("open");
};

arr.forEach(function (navLink) {
  console.log(navLink);
  console.log(arr);
  navLink.onclick = () => {
    console.log("Click");
    nav.classList.remove("open");
  };
});

// navLink.onclick = () => {
//   console.log("Click");
//   nav.classList.remove("open");
// };

AOS.init({
  once: true,
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockId = anchor.getAttribute("href").substr(1);

    document.getElementById(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
