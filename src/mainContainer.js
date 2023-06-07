import chefPhoto from './chef.jpg';

export default function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main');

    const headerOne = document.createElement('h1');
    headerOne.textContent = 'The best burgers only with us!';
    mainContainer.appendChild(headerOne);

    const para = document.createElement('p');
    para.classList.add('description');
    para.textContent = 'Makes You happy with ours burgers is our passion';
    mainContainer.appendChild(para);

    const chefImg = document.createElement('img');
    chefImg.classList.add('circle_img');
    chefImg.src = chefPhoto;
    chefImg.alt = 'Best Chef';
    mainContainer.appendChild(chefImg);

    const secPara = document.createElement('p');
    secPara.classList.add('cta');
    secPara.textContent = 'Order best burgers online or visit our awesome local!';
    mainContainer.appendChild(secPara);

    return mainContainer;
};
