function contactPage() {
    const contentContainer = document.getElementById('content');

    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');
    const hoursTable = document.createElement('table');
    hoursTable.classList.add('hours-table');
    hoursTable.innerHTML = `
        <caption>Hours of Operation</caption>
        <thead>
            <tr>
                <th>Day</th>
                <th>Opening Hours</th>
                <th>Closing Hours</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monday</td>
                <td>9:00 AM</td>
                <td>8:00 PM</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>9:00 AM</td>
                <td>8:00 PM</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>9:00 AM</td>
                <td>8:00 PM</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>9:00 AM</td>
                <td>8:00 PM</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>9:00 AM</td>
                <td>8:00 PM</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>10:00 AM</td>
                <td>8:00 PM</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>Closed</td>
                <td>Closed</td>
            </tr>
        </tbody>
    `;

  
    const contactHeader = document.createElement('div');
    contactHeader.textContent = 'Contact Information';
    contactHeader.classList.add('contact-header');
  
    const contactInformation = document.createElement('div');
    contactInformation.innerHTML = `
        <p>Phone Number: 132-332-3412</p>
        <br>
        <p>Address: 123 Street, City, State, Zipcode</p>
    `;
    contactInformation.classList.add('contact-information');
  
    tableContainer.appendChild(hoursTable)
    contentContainer.appendChild(tableContainer);
    contentContainer.appendChild(contactHeader);
    contentContainer.appendChild(contactInformation);
    
  }
  
  export default contactPage;
  