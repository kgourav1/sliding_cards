const listItems = document.querySelectorAll(".list-item");
const overlay = document.querySelector(".overlay");

let currentItem = null;

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === currentItem) {
      overlay.classList.toggle("active");
      setTimeout(() => {
        overlay.classList.toggle("hide");
      }, 100);
      currentItem = null;
    } else {
      overlay.innerHTML = `<h2>${item.textContent}</h2>`;
      overlay.classList.remove("hide");
      setTimeout(() => {
        overlay.classList.add("active");
      }, 10);
      currentItem = item.textContent;
    }
  });
});
