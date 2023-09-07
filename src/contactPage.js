function contactPage() {
    const contentContainer = document.getElementById('content');
  
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Information'; // Use '=' to set text content
  
    const contactInformation = document.createElement('div');
    contactInformation.textContent = 'Phone Number: 132-332-3412\nAddress: 123 Street, City, State, Zipcode'; // Use '=' to set text content
    contactInformation.classList.add('contact-information');
  
    const hoursInformation = document.createElement('div');
    hoursInformation.textContent = 'Hours of Operation:\nMonday - Friday 11am-9pm\nSat-Sun 11am - 11pm'; // Use '=' to set text content
    hoursInformation.classList.add('hours-information');
  
    contentContainer.appendChild(contactHeader);
    contentContainer.appendChild(contactInformation);
    contentContainer.appendChild(hoursInformation);
  }
  
  export default contactPage;
  