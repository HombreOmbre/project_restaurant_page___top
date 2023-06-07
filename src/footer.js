import gitIcon from './github.svg';

export default function createFooter() {
    const footerTag = document.createElement('footer');
    
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('foot');
    footerTag.appendChild(footerContainer);

    const footerPara = document.createElement('p');
    footerPara.classList.add('footer');
    footerPara.innerHTML = `
        Copyright <span class="copy">©</span> 2023 HombeOmbre
    `;
    footerContainer.appendChild(footerPara);

    const ghLink = document.createElement('a');
    ghLink.classList.add('gh_icon');
    ghLink.href = 'https://github.com/HombreOmbre'
    ghLink.target = '_blank';

    const ghIcon = document.createElement('img');
    ghIcon.classList.add('icon');
    ghIcon.src = gitIcon;
    ghIcon.alt = 'GitHub Icon';
    ghLink.appendChild(ghIcon)
    footerContainer.appendChild(ghLink);

    return footerTag;
};
