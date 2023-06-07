import header from './header.js';
import footer from './footer.js';
import main from './mainContainer.js';
import menu from './menuContainer.js';
import contact from './contactContainer.js';
import './style.css';

const domController = (() => {

    const _addEventListenersToButtons = () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach((btn) => btn.addEventListener('click', (e) => {
        buttons.forEach((btn) => btn.classList.remove('active'));
        switch (e.target.classList[1]) {
            case 'home':
                domController.createPage(main(), 'home');
            break;
        
            case 'menu':
                domController.createPage(menu(), 'menu');
            break;
        
            case 'contact':
                domController.createPage(contact(), 'contact');
            break;
        };
    }));
}

    const createPage = (module, activeBtn) => {
        const contentContainer = document.querySelector('#content');

        contentContainer.innerHTML = '';

        contentContainer.appendChild(header());
        contentContainer.appendChild(module);
        contentContainer.appendChild(footer());

        document.querySelector(`.${activeBtn}`).classList.add('active');

        _addEventListenersToButtons();
    };

    return {
        createPage,
    }
})();

window.addEventListener('load', domController.createPage.bind(this, main(), 'home'));
