const today = new Date();

let currentYear = today.getFullYear();

document.getElementById("copyright").innerHTML = `&copy; Brendin S ${currentYear} Utah, USA`;

document.getElementById("lastModified").innerHTML = document.lastModified;