import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

window.onload = () => {
    const content = document.getElementById('content');

    const nav = document.createElement('div');
    nav.classList.add('nav');
    
    const navHome = document.createElement('button');
    navHome.addEventListener('click', () => {
            clearContainer();
            home();
        }
    );
    navHome.textContent = 'Home';
    const navMenu = document.createElement('button');
    navMenu.addEventListener('click', () => {
            clearContainer();
            menu();
        }
    );
    navMenu.textContent = 'Menu';
    const navContact = document.createElement('button');
    navContact.addEventListener('click', () => {
            clearContainer();
            contact();
        }
    );
    navContact.textContent = 'Contact';

    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);
    content.appendChild(nav);

    const container = document.createElement('div');
    container.id = 'container';
    content.appendChild(container);

    home();
};

const clearContainer = () => {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const navMenu = document.getElementById('menu');
