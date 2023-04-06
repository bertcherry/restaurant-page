import logo from './logo.jpg';

const home = () => {
    const hero = document.createElement('div');
    hero.classList.add('hero');

    const name = document.createElement('h1');
    name.textContent = 'Bert\'s Beignets by Bike';
    hero.appendChild(name);

    const logoContainer = document.createElement('div');
    const logoImage = document.createElement('img');
    logoImage.src = logo;
    logoContainer.appendChild(logoImage);
    hero.appendChild(logoContainer);

    container.appendChild(hero);

    const quote = document.createElement('div');
    quote.classList.add('quote');
    
    const quoteText = document.createElement('div');
    quoteText.classList.add('quote-text');
    quoteText.textContent = 'These beignets are incredible! And having them delivered to me by a carbon-neutral service? Even better. The coffee is hot, the jam is gooey, and the vibes are great!';
    quote.appendChild(quoteText);

    const quoteAttribution = document.createElement('div');
    quoteAttribution.classList.add('quote-attribution');
    quoteAttribution.textContent = 'Seph Tacular';
    quote.appendChild(quoteAttribution);

    container.appendChild(quote);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours';
    hours.appendChild(hoursTitle);

    const hoursData = document.createElement('ul');
    hoursData.classList.add('hours-list');
    const hoursOne = document.createElement('li');
    const hoursTwo = document.createElement('li');
    hoursOne.textContent = 'Saturday 9am - 12pm';
    hoursTwo.textContent = 'Sunday 9am - 2pm';
    hoursData.appendChild(hoursOne);
    hoursData.appendChild(hoursTwo);
    hours.appendChild(hoursData);

    const hoursText = document.createElement('div');
    hoursText.textContent = 'Please contact us to arrange your order and delivery.';
    hours.appendChild(hoursText);

    container.appendChild(hours);
};

export default home;