document.getElementById("card-list");


const url = 'https://bsauerschool.github.io/wdd231/chamber/data/members.json'
async function getData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  console.log(data); // temp output test of data response 
}

getData();



