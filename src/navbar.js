function navBar(){
    const navBarContainer = document.getElementById('navbar');

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
    menuNavLink.textContent = "About"
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