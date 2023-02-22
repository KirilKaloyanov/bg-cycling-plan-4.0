fetch('menuTemplate.html')
    .then(response => response.text())
    .then(html => render(html));

function render(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const template = doc.querySelector('#menu-template');
    const menuTarget = template.content.cloneNode(true);
    document.querySelector('header').appendChild(menuTarget);

    const headerDiv = document.querySelector('.header');
    console.log(headerDiv.classList);

    window.addEventListener('scroll', console.log(window.pageYOffset))
}
