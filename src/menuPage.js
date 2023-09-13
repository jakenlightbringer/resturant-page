import classicMenuImg from '/home/jake/resturant-page/src/Images/classic.jpg'
import japImg from '/home/jake/resturant-page/src/Images/japchae-menu.jpg';
import kimchiImg from '/home/jake/resturant-page/src/Images/KimchifriedRice.jpg';
import topBab from '/home/jake/resturant-page/src/Images/topbab.jpg'


function menu(){
    
    const contentContainer = document.getElementById("content");

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const classicContainer = document.createElement('div');
    classicContainer.classList.add('classic-item');
    classicContainer.textContent = "Classic Bowl";
    
    const classicImg = document.createElement('img');
    classicImg.src = classicMenuImg;
    classicImg.style.height = '200px';
    classicImg.style.width = '200px';
    classicContainer.appendChild(classicImg);



    const japchaeContainer = document.createElement('div');
    japchaeContainer.classList.add('japchae-item');
    japchaeContainer.textContent = "Japchae";
    
    const japchaeImg = document.createElement('img');
    japchaeImg.src = japImg;
    japchaeImg.style.height = '200px';
    japchaeImg.style.width = '200px';
    japchaeContainer.appendChild(japchaeImg);



    const kimchiContainer = document.createElement('div');
    kimchiContainer.classList.add('kimchi-item');
    kimchiContainer.textContent = "Kimchi Fried Rice";
    
    const kimchiImage = document.createElement('img');
    kimchiImage.src = kimchiImg;
    kimchiImage.style.height = '200px';
    kimchiImage.style.width = '200px';
    kimchiContainer.appendChild(kimchiImage);


    const topBabContainer = document.createElement('div');
    topBabContainer.classList.add('topbab-item');
    topBabContainer.textContent = "TopBab Bowl";
    
    const topBabImg = document.createElement('img');
    topBabImg.src = topBab;
    topBabImg.style.height = '200px';
    topBabImg.style.width = '200px';
    topBabContainer.appendChild(topBabImg);



    menuContainer.appendChild(classicContainer);
    menuContainer.appendChild(topBabContainer);
    menuContainer.appendChild(kimchiContainer);
    menuContainer.appendChild(japchaeContainer);
    contentContainer.appendChild(menuContainer);
}

export default menu;