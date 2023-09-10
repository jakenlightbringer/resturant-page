import homePage from "./homepage";
import navBar from "./navbar";
import contactPage from "./contactPage";
import menuPage from './menuPage'
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    homePage();
    navBar();
    const contactButtons = document.querySelectorAll('.contact-button');
    const homeButtons = document.querySelectorAll(".home-button");
    const menuButtons = document.querySelectorAll('.menu-button');

    contactButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('contact button clicked');
            clearContent();
            contactPage();
        });
    });
    homeButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('contact button clicked');
            clearContent();
            homePage();
        });
    });
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('menu button clicked');
            clearContent();
            menuPage();
        });
    });
    
});

function clearContent(){
    const contentContainer = document.getElementById('content');

    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
}