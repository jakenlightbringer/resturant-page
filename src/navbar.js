function navBar(){
    const navBarContainer = document.getElementById('navbar');

    const navList = document.createElement('ul');

    const homeNav = document.createElement('button');
    const aboutNav = document.createElement('button');
    const contactNav = document.createElement('button');

    const homeNavLink = document.createElement('a');
    homeNavLink.textContent = "Home"
    const aboutNavLink = document.createElement('a');
    aboutNavLink.textContent = "About"
    const contactNavLink = document.createElement('a');
    contactNavLink.textContent = "Contact"

    homeNav.appendChild(homeNavLink);
    aboutNav.appendChild(aboutNavLink);
    contactNav.appendChild(contactNavLink);

    navList.appendChild(homeNav);
    navList.appendChild(aboutNav);
    navList.appendChild(contactNav);

    navBarContainer.appendChild(navList);


}

export default navBar;