const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");

navBtn.onclick = () => {
  console.log("Кнопка нажата!");
  nav.classList.toggle("open");
};

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
