class DocumentCard extends HTMLElement {
    // constructor() {
    //     super();
    //     this.attachShadow({ mode: 'open'});
    // }

    connectedCallback() {
        const docCardTitle = document.createElement('div');
        docCardTitle.classList.add('document_card_title');
        docCardTitle.textContent = this.getAttribute('title');
        this.appendChild(docCardTitle);
    }
}

window.customElements.define('document-card', DocumentCard);