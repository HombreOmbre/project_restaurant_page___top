import header from './header.js';
import footer from './footer.js';
import main from './mainContainer.js';

function createHomePage() {
    let arrWithModules = [];
    const container = document.querySelector('#content');
    
    arrWithModules = [
        header(),
        main(),
        footer(),
    ];

    for (let i = 0; i < arrWithModules.length; i++) {
        container.innerHTML += arrWithModules[i];
    };

}

window.addEventListener('load', createHomePage);