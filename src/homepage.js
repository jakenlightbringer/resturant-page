import backgroundImg from '/home/jake/resturant-page/src/Images/ResturantImg.jpg';

function homePage(){
    const contentContainer = document.getElementById('content');
    
    

    const header = document.createElement('h2');
    header.classList.add('header');
    const subHeader = document.createElement('h4');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container')
    
    const image = document.createElement('img');
    image.src = backgroundImg;

    header.innerHTML = "Korean Cafe";
    subHeader.innerHTML = "Home cooked Korean Food made fresh daily just for you!";

    imageContainer.appendChild(image);

    contentContainer.appendChild(header);
    contentContainer.appendChild(subHeader);
    contentContainer.appendChild(imageContainer);

    



}

export default homePage;