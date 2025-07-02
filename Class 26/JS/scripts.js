const main = document.getElementById("main");
const pain1 = document.getElementsByClassName("pain")[0];
const pain2 = document.getElementsByClassName("pain")[1];
const pain3 = document.getElementsByClassName("pain")[2];
const rain = document.querySelector("#rain");
const h1 = document.querySelector("h1");
const gain = document.querySelector(".gain");
const gain2 = document.querySelectorAll(".gain");
const cityList = document.getElementById("cityList");

main.innerHTML = "<h1>Hello World</h1>";
pain1.innerText = "This is a pain div";
pain2.innerText = "This is a pain div";
pain3.innerText = "This is a pain div";
rain.innerHTML = "<h1>Raining</h1>";
h1.innerText = "Hello!";
gain.innerText = "AM A GAIN DIV";
gain2[1].innerText = "AM A GAIN DIV 2 :))";

//console.log(citylist.childNodes);
//console.log(citylist.children);

cityList.children[0].innerText = "Dhaka";
cityList.children[1].innerText = "Chittagong";
cityList.children[2].innerText = "Khulna";
cityList.children[3].innerText = "Rajshahi";
cityList.children[4].innerText = "Sylhet";


//select parent element
console.log(cityList.parentElement);
console.log(cityList.parentNode);

//Select Next Sibling
console.log(cityList.nextElementSibling);
console.log(cityList.nextSibling);

//Select Previous Sibling
console.log(cityList.previousElementSibling);
console.log(cityList.previousSibling);

cityList.nextElementSibling.textContent = "This is the next sibling of cityList";
cityList.previousElementSibling.textContent = "This is the previous sibling of cityList";