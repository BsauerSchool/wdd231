const cardList = document.querySelector('#cards');


const url = './data/members.json'
async function getData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  displayData(data.members)
}

getData();


const displayData = (members) => {
  members.forEach((member) =>{
    //c reating elements
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    address.id = 'address';
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let membershipLevel = document.createElement('p');

    
    // name
    name.textContent = `${member.name}`;
    // Image
    image.setAttribute('src', member.img);
    image.setAttribute('alt', `Logo for ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');
    image.id = 'card-image';
    //address
    address.innerHTML = `<strong>Address:</strong> ${member.address.street},\n ${member.address.city}, ${member.address.state} ${member.address.zip}`
    //phone
    phone.innerHTML =  `<strong>Phone:</strong>  ${member.phone}`
    //url
    url.innerHTML = `<strong>URL:</strong>  ${member.url}`;
    //membership level
    membershipLevel.innerHTML = `<strong>Membership Level:</strong>  ${member.memberLevel}`;

    //adding items to card
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(membershipLevel);

    cardList.appendChild(card);
    console.log(card);
  });
}







