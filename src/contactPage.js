function contactPage() {
    const contentContainer = document.getElementById('content');
  
    const contactHeader = document.createElement('div');
    contactHeader.textContent = 'Contact Information'; 
  
    const contactInformation = document.createElement('div');
    contactInformation.textContent = 'Phone Number: 132-332-3412\nAddress: 123 Street, City, State, Zipcode'; 
    contactInformation.classList.add('contact-information');
  
    const hoursInformation = document.createElement('div');
    hoursInformation.textContent = 'Hours of Operation:\nMonday - Friday 11am-9pm\nSat-Sun 11am - 11pm'; 
    hoursInformation.classList.add('hours-information');
  
    contentContainer.appendChild(contactHeader);
    contentContainer.appendChild(contactInformation);
    contentContainer.appendChild(hoursInformation);
  }
  
  export default contactPage;
  