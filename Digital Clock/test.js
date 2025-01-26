const showTime = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let currentDay = time.getDay();

    // Format the time to have leading zeros
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    // Update the time display
    document.querySelector(".time").innerHTML = `${hour} : ${min} : ${sec}`;

    // Dynamically populate the days
    const daysContainer = document.querySelector(".days ul");
    daysContainer.innerHTML = ""; // Clear existing days to avoid duplication
    days.forEach((day, index) => {
        const li = document.createElement("li");
        li.textContent = day;

        // Highlight the current day
        if (index === currentDay) {
            li.style.color = "white";
        } else {
            li.style.color = "rgb(67, 67, 67)";
        }

        daysContainer.appendChild(li);
    });
};

// Call the function every second
setInterval(showTime, 1000);
showTime();
