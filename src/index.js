import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

window.onload = () => {
    const content = document.getElementById('content');
    const nav = document.createElement('div');
    const navHome = document.createElement('button');
    navHome.textContent = 'Home';
    const navMenu = document.createElement('button');
    navMenu.textContent = 'Menu';
    const navContact = document.createElement('button');
    navContact.textContent = 'Contact';
    nav.appendChild(navHome);
    nav.appendChild(navMenu);
    nav.appendChild(navContact);
    content.appendChild(nav);
    home();
};