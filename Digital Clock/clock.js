
showTime = () => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const time = new Date();

    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let currentday = time.getDay()
    let date = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    let am = "AM";
    if (hour >= 12) {
        am = "PM";
    }
    hour = hour === 0 ? 12 : hour > 12 ? hour % 12 : hour;
    
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    document.querySelector(".digital").innerHTML = `${hour} : ${min} : ${sec} ${am}`;
    document.querySelector(".date").innerHTML = `${month + 1} / ${date} / ${year}`;



    const daysContainer = document.querySelector(".days ul");
    daysContainer.innerHTML = ""; // Clear existing days to avoid duplication
    days.forEach((day, index) => {
        const li = document.createElement("li");
        li.textContent = day;

        // Highlight the current day
        if (index === currentday) {
            li.style.color = "white";
        } else {
            li.style.color = "rgb(67, 67, 67)";
        }

        daysContainer.appendChild(li);
    });
}
setInterval(showTime, 1000);
showTime()