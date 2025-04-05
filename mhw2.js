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

function display(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    } else {
        console.error(`Elemento con selettore "${selector}" non trovato.`);
    }
}

function hide(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add('hidden');
    } else {
        console.error(`Elemento con selettore "${selector}" non trovato.`);
    }
}

languageSelector.addEventListener('click', () => display('.language-menu'));
languageSelector.addEventListener('blur', () => hide('.language-menu'));


const navCampanella = document.querySelector('#nav-campanella');


navCampanella.addEventListener('click', () => display('#letterbox'));
navCampanella.addEventListener('blur', () => hide('#letterbox'));


const panelItems = document.querySelectorAll('.panel-item');


panelItems.forEach(panelItem => {
    const nome = panelItem.dataset.nome; 
    const descrizione = panelItem.dataset.descrizione; 
    const prezzo = panelItem.dataset.prezzo; 

    if(panelItem.dataset.bestseller == false) {
        const bestsellerElement = panelItem.querySelector('.bestseller');
        bestsellerElement.remove(); 
    }

    if(panelItem.dataset.burger == false) {
        const burgerElement = panelItem.querySelector('.burger');
        burgerElement.remove(); 
    }

    if(panelItem.dataset.chips == false) {
        const chipsElement = panelItem.querySelector('.chips');
        chipsElement.remove(); 
    }

    if(panelItem.dataset.drink == false) {
        const drinkElement = panelItem.querySelector('.drink');
        drinkElement.remove(); 
    }

    const immagineElement = panelItem.querySelector('.item-img');
    if (immagineElement) {
        immagineElement.src = panelItem.dataset.immagine; // Aggiorna l'immagine
        
    }

    // Modifica il contenuto del titolo
    const titoloElement = panelItem.querySelector('.item-titolo .item-category');
    if (titoloElement) {
        titoloElement.textContent = nome; // Aggiorna il nome
    }

    // Modifica il contenuto della descrizione
    const descrizioneElement = panelItem.querySelector('.item-description');
    if (descrizioneElement) {
        descrizioneElement.lastChild.textContent = descrizione; // Aggiorna la descrizione
    }

    // Modifica il contenuto del prezzo
    const prezzoElement = panelItem.querySelector('.item-button .N-Prodotti');
    if (prezzoElement) {
        prezzoElement.textContent = prezzo +'€'; // Aggiorna il prezzo
    }
});





