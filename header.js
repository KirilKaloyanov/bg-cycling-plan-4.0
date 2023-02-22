fetch("headerTemplate.html")
  .then((response) => response.text())
  .then((html) => renderHeader(html));

function stickyMenu(element) {
  let scrolling = true;
  window.onscroll = () => (scrolling = true);

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      if (window.scrollY > 45) element.classList.add("ham");
      else element.classList.remove("ham");
    }
  }, 300);
}

function renderHeader(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headerTemplate = doc.querySelector("#menu-template");
  const menuTarget = headerTemplate.content.cloneNode(true);
  document.querySelector("header").appendChild(menuTarget);

  const headerDiv = document.querySelector(".header");
  stickyMenu(headerDiv);

  const hamburger = document.querySelector('img.clickable');
  const nav = document.querySelector('nav');
  hamburger.addEventListener('click', () => nav.classList.toggle('container_hidden'));
}
