const promoScopri = document.querySelector('#promo-scopri');
const element1 = {
    link: 'https://static.xmenu.it/api/img/resize?image_uri=uploads%2Fpromotions%2F2195%2FIMG_7744.jpeg&w=800',
    validità: 'Tutti i Venerdì',
    Titolo: 'Offerta 1',
    text: 'Torna la Super BFF del Venerdì! Ordinando due menù, il PANINO meno caro lo paghi la metà!Lo sconto verrà applicato in cassa.',
    Avabilty: 'Tutti gli ordni'
};
const element2 = {
    link: 'https://static.xmenu.it/api/img/resize?image_uri=uploads%2Fpromotions%2F830%2FWhatsApp+Image+2022-10-10+at+12.45.20.jpeg&w=800',
    validità: 'Tutti i Giovedì',
    Titolo: 'Offerta 2',
    text: 'Tutti i Giovedì consegna a domicilio "AGGRATIS"Ordine minimo 10€',
    Avabilty: 'Consegna a domicilio'
};
const array = [element1, element2];

function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup-container');

    const banneroffert = document.createElement('div');
    banneroffert.classList.add('popup-content');

    const banneroffertTitle = document.createElement('h3');
    banneroffertTitle.textContent = 'Offerta speciale';
    banneroffertTitle.classList.add('popup-title');
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');

    const closeIcon = document.createElement('img');
    closeIcon.src = 'xbianca.svg';
    closeIcon.classList.add('close-icon');
    closeButton.appendChild(closeIcon);
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popup);
        promoScopri.addEventListener('click', showPopup);
    });

    banneroffertTitle.appendChild(closeButton);
    banneroffert.appendChild(banneroffertTitle);

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const offertelement = document.createElement('div');
        offertelement.classList.add('offerta-element');
        const offertelementImg = document.createElement('img');
        offertelementImg.src = element.link;
        offertelementImg.classList.add('offerta-img');
        offertelement.appendChild(offertelementImg);

        const offertelementValidity = document.createElement('div');
        offertelementValidity.classList.add('offerta-validity');
        const offertelementValidityText = document.createElement('p');
        offertelementValidityText.classList.add('offerta-validity-text');
        offertelementValidityText.textContent = element.validità;
        offertelementValidity.appendChild(offertelementValidityText);
        offertelement.appendChild(offertelementValidity);

        const offertelementTitle = document.createElement('h3');
        offertelementTitle.textContent = element.Titolo;
        offertelementTitle.classList.add('offerta-title');
        offertelement.appendChild(offertelementTitle);

        const offertelementText = document.createElement('p');
        offertelementText.textContent = element.text;
        offertelementText.classList.add('offerta-text');
        offertelement.appendChild(offertelementText);

        const offertelementAvability = document.createElement('div');
        offertelementAvability.classList.add('offerta-avability');

        const offertelementAvabilityText = document.createElement('p');
        offertelementAvabilityText.textContent = 'Disponibile per:';
        offertelementAvability.appendChild(offertelementAvabilityText);

        const offertelementAvabilityTag = document.createElement('div');
        offertelementAvabilityTag.classList.add('bestseller');
        const offertelementAvabilityTagText = document.createElement('p');
        offertelementAvabilityTagText.textContent = element.Avabilty;
        offertelementAvabilityTag.appendChild(offertelementAvabilityTagText);
        offertelementAvability.appendChild(offertelementAvabilityTag);
        offertelement.appendChild(offertelementAvability);

        banneroffert.appendChild(offertelement);
    }
    popup.appendChild(banneroffert);
    document.body.appendChild(popup);

    promoScopri.removeEventListener('click', showPopup);
}

promoScopri.addEventListener('click', showPopup);

const languageSelector = document.querySelector('#nav-flag');
const languageSelectorIcon = document.querySelector('#nav-freccia');

function displaylanguagemenu() {
    const languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.remove('hidden');
}
function hidelanguagemenu() {
    const languageMenu = document.querySelector('.language-menu');
    languageMenu.classList.add('hidden');
}

languageSelector.addEventListener('click', displaylanguagemenu );
languageSelectorIcon.addEventListener('click', displaylanguagemenu );

languageSelector.addEventListener('blur', hidelanguagemenu );
languageSelectorIcon.addEventListener('blur', hidelanguagemenu );


