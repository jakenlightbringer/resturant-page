import homePage from "./homepage";
import navBar from "./navbar";
import contactPage from "./contactPage"; 
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    homePage();
    navBar();
    const contactButtons = document.querySelectorAll('.contact-button');
    const homeButtons = document.querySelectorAll(".home-button");

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

    
});

function clearContent(){
    const contentContainer = document.getElementById('content');

    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
}