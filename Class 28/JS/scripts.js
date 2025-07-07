const clock = document.getElementById("Clock");
const date = document.getElementById("date");
const week = document.getElementById("week");
const changeBg = document.getElementById("change-Bg");

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

days.forEach(day => {
   const div = document.createElement("div");
    div.className = "text-center text-sm border p-2 rounded shadow";
    div.innerHTML = day;
    week.appendChild(div);
})

const updateClock = () => {
    const d = new Date();
    const hours = d.getHours();
    const convertedHours = hours % 12 || 12; // Convert to 12-hour format
    const realHours = convertedHours.toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');
    clock.innerHTML = `${realHours}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;
    const dt = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    date.innerHTML = `${month} ${dt}, ${year}`;
    week.children[d.getDay()].classList.add("bg-blue-500", "text-white", "font-bold");
}

setInterval(updateClock, 1000); 
setInterval(updateClock, 1000); // Update clock every second

const changeColor = () => {
    const hexNumber = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
        newColor += hexNumber[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = newColor;
}

changeColor(); // Initial background color change
document.getElementById("change-Bg").addEventListener("click", changeColor); // Change background color on button click