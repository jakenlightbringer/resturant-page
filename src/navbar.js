import icon from '/home/jake/resturant-page/src/Images/cooking.png';


function navBar(){
    const navBarContainer = document.getElementById('navbar');
    const navBarImage = document.createElement('div')
    const logo = document.createElement('img');
    logo.setAttribute('id', 'navbar-img');
    logo.src = icon;

    navBarImage.appendChild(logo);
    navBarContainer.append(navBarImage);
    


    const navList = document.createElement('ul');

    const homeNav = document.createElement('button');
    homeNav.classList.add('home-button');
    const menuNav = document.createElement('button');
    menuNav.classList.add('menu-button');
    const contactNav = document.createElement('button');
    contactNav.classList.add('contact-button');

    const homeNavLink = document.createElement('a');
    homeNavLink.textContent = "Home"
    const menuNavLink = document.createElement('a');
    menuNavLink.textContent = "Menu"
    const contactNavLink = document.createElement('a');
    contactNavLink.textContent = "Contact"

    homeNav.appendChild(homeNavLink);
    menuNav.appendChild(menuNavLink);
    contactNav.appendChild(contactNavLink);

    navList.appendChild(homeNav);
    navList.appendChild(menuNav);
    navList.appendChild(contactNav);

    navBarContainer.appendChild(navList);

    
}

export default navBar;