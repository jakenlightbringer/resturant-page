import classicMenuImg from '/home/jake/resturant-page/src/Images/classic.jpg'
import japImg from '/home/jake/resturant-page/src/Images/japchae-menu.jpg';
import kimchiImg from '/home/jake/resturant-page/src/Images/KimchifriedRice.jpg';
import topBab from '/home/jake/resturant-page/src/Images/topbab.jpg'


function menu(){
    
    const contentContainer = document.getElementById("content");

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const classicContainer = document.createElement('div');
    classicContainer.setAttribute('id', 'classic-container');

    const classicImg = document.createElement('img');
    classicImg.src = classicMenuImg;
    classicContainer.appendChild(classicImg);

    menuContainer.appendChild(classicContainer);
    contentContainer.appendChild(menuContainer);
}

export default menu;