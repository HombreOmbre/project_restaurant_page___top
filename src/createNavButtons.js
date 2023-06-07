const buttonMaker = (classValue, name) => {
    return {classValue, name};
}

export default function createButtons() {
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav');

    const arrForButtons = [
        buttonMaker('btn home', 'Home'),
        buttonMaker('btn menu', 'Menu'),
        buttonMaker('btn contact', 'Contact')
    ];

    for (let i = 0; i < arrForButtons.length; i++) {
        navContainer.innerHTML += `
            <button class="${arrForButtons[i].classValue}">${arrForButtons[i].name}</button>
        `;
    };

    return navContainer;
}