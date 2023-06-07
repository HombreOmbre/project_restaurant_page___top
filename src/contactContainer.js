export default function createContact() {
    
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact_module');

    const headerOne = document.createElement('h2');
    headerOne.classList.add('phone_num');
    headerOne.textContent = '📱 123 456 789';
    contactPage.appendChild(headerOne);

    const headerTwo = document.createElement('h2');
    headerTwo.classList.add('address');
    headerTwo.textContent = '🏠 Warsaw, Chmielna 20, Poland';
    contactPage.appendChild(headerTwo);

    const gMap = document.createElement('div');
    gMap.classList.add('gmap_canvas');
    gMap.innerHTML = `
        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=500&amp;hl=en&amp;q=warsaw, chmielna 20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    `;
    contactPage.appendChild(gMap);

    return contactPage;
}