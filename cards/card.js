fetch('cards/cardTemplate.html')
    .then(response => response.text())
    .then(html => render(html));


function render(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const template = doc.querySelector('template');

    class MyCard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
        }
        
        connectedCallback() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            console.log(template)
        }
    }

    window.customElements.define('my-card', MyCard);
}