import createButtons from './createNavButtons.js';

export default function createHeader() {
    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header');

    const headDiv = document.createElement('div');
    headDiv.classList.add('head');
    headerContainer.appendChild(headDiv);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = `
        <span class="red_logo">Hype</span>Burgers
    `;
    headDiv.appendChild(logo);

    headDiv.appendChild(createButtons());

    return headerContainer;
};
