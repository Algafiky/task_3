//mengubah text
const judul = document.getElementById("judul");
judul.innerHTML = "<center> CV </center>";

//membuat element baru
const Hbaru = document.createElement("h3");
const textbaru = document.createTextNode("ubah bakground");
Hbaru.appendChild(textbaru);
const sectionA = document.getElementById("a");
sectionA.appendChild(Hbaru);

// event handler
const button = document.getElementById("button");
button.onclick = function () {
  document.body.classList.toggle("change-color");
};
