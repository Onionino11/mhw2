const promoScopri = document.querySelector('#promo-scopri');
const popup = document.querySelector('#modal-view');
    
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
    popup.classList.remove('hidden');
    

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
    closeButton.addEventListener('click', removePopup);

    function removePopup() {
        popup.removeChild(banneroffert);
        popup.classList.add('hidden');
        promoScopri.addEventListener('click', showPopup);
    }

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

function displayLanguageMenu() {
    const element = document.querySelector('#language-menu');
    if (element) {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            console.log('Menu lingua mostrato');
        } else {
            element.classList.add('hidden');
            console.log('Menu lingua nascosto');
        }
    } else {
        console.error(`Elemento con selettore "${selector}" non trovato.`);
    }
}

function hideLanguageMenu() {
    const element = document.querySelector('#language-menu');
    if (element) {
        element.classList.add('hidden');
        console.log('Menu lingua nascosto');
    } else {
        console.error(`Elemento con selettore "${selector}" non trovato.`);
    }
}



languageSelector.addEventListener('click',  displayLanguageMenu);
languageSelector.addEventListener('blur', hideLanguageMenu);


const navCampanella = document.querySelector('#nav-campanella');

function displayletterbox() {
    const element = document.querySelector('#letterbox');
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

function hideletterbox() {
    const element = document.querySelector('#letterbox');
    if (element) {
        element.classList.add('hidden');
    } else {
        console.error(`Elemento con selettore "${selector}" non trovato.`);
    }
}

navCampanella.addEventListener('click', displayletterbox);
navCampanella.addEventListener('blur',  hideletterbox);


const panelItems = document.querySelectorAll('.panel-item');

for (let i = 0; i < panelItems.length; i++) {
    const panelItem = panelItems[i];

    const nome = panelItem.dataset.nome;
    const descrizione = panelItem.dataset.descrizione;
    const prezzo = panelItem.dataset.prezzo;

    if (panelItem.dataset.bestseller == 0) {
        const bestsellerElement = panelItem.querySelector('.bestseller');
        if (bestsellerElement) {
            bestsellerElement.remove();
        }
    }

    if (panelItem.dataset.burger == 0) {
        const burgerElement = panelItem.querySelector('.burger');
        if (burgerElement) {
            burgerElement.remove();
        }
    }

    if (panelItem.dataset.chips == 0) {
        const chipsElement = panelItem.querySelector('.chips');
        if (chipsElement) {
            chipsElement.remove();
        }
    }

    if (panelItem.dataset.drink == 0) {
        const drinkElement = panelItem.querySelector('.drink');
        if (drinkElement) {
            drinkElement.remove();
        }
    }

    const immagineElement = panelItem.querySelector('.item-img');
    if (immagineElement) {
        immagineElement.src = panelItem.dataset.immagine;
    }

    const titoloElement = panelItem.querySelector('.item-titolo .item-category');
    if (titoloElement) {
        titoloElement.textContent = nome;
    }

    const descrizioneElement = panelItem.querySelector('.item-description');
    if (descrizioneElement) {
        descrizioneElement.lastChild.textContent = descrizione;
    }

    const prezzoElement = panelItem.querySelector('.item-button .N-Prodotti');
    if (prezzoElement) {
        prezzoElement.textContent = prezzo + '€';
    }
}
