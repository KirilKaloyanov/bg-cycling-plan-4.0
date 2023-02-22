fetch("menuTemplate.html")
  .then((response) => response.text())
  .then((html) => render(html));

let scrolling = false;
window.onscroll = () => (scrolling = true);

function render(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const template = doc.querySelector("#menu-template");
  const menuTarget = template.content.cloneNode(true);
  document.querySelector("header").appendChild(menuTarget);

  const headerDiv = document.querySelector(".header");

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      if (window.scrollY > 45) {
        headerDiv.classList.add("ham");
      } else {
        headerDiv.classList.remove("ham");
      }
    }
  }, 300);
}

