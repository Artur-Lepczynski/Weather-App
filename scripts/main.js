//import "../node_modules/@splidejs/splide/dist/js/splide.min.js"; 
import { getWeather, tempCurrent, tempForecast } from "./weather.js";

const dailySplide = document.querySelector("#daily-splide");
const hourlySplide = document.querySelector("#hourly-splide");
const splideOptions = {
    perPage: 5,
    perMove: 1,
    gap: "10px",
    pagination: false,
    drag: true,
    breakpoints: {
        1200: {
            perPage: 4
        },
        970: {
            perPage: 3,
        },
        670: {
            perPage: 2,
        },
        370: {
            perPage: 1,
        }
    }
};

new Splide(dailySplide, splideOptions).mount();
new Splide(hourlySplide, splideOptions).mount();

const tempUnitCelcius = "°c";
const mainLocationIcon = document.createElement("i");
mainLocationIcon.className = "fa-solid fa-location-dot";
mainLocationIcon.style.marginRight = "6px";

const mainLocation = document.querySelector("#main-display-location");
const mainIcon = document.querySelector("#main-display-icon");
const mainTemp = document.querySelector("#main-display-temp");
const mainWeatherDescription = document.querySelector("#weather-description");

const moreInfoUnitsArray = Array.from(document.querySelectorAll(".more-info-unit"));
const moreInfoUnitsData = moreInfoUnitsArray.map((item) => item.children[1]);

//select daily slide elements
const dailySlidesDays = Array.from(document.querySelectorAll(".daily-splide-day"));
const dailySlidesIcons = Array.from(document.querySelectorAll(".daily-splide-icon"));
const dailySlidesMax = Array.from(document.querySelectorAll(".daily-splide-temp-max"));
const dailySlidesMin = Array.from(document.querySelectorAll(".daily-splide-temp-min"));
const dailySlidesDesc = Array.from(document.querySelectorAll(".daily-splide-desc"));

//select hourly slide elements
const hourlySlidesHours = Array.from(document.querySelectorAll(".hourly-splide-hour"));
const hourlySlidesIcons = Array.from(document.querySelectorAll(".hourly-splide-icon"));
const hourlySlidesMax = Array.from(document.querySelectorAll(".hourly-splide-temp-max"));
const hourlySlidesMin = Array.from(document.querySelectorAll(".hourly-splide-temp-min"));
const hourlySlidesDesc = Array.from(document.querySelectorAll(".hourly-splide-desc"));

const dailySplides = document.querySelector("#daily-slide-list").children;
let lastSelected = dailySplides[0];
lastSelected.classList.add("slide-focused"); 

let forecastList; 
let timezone; 

for (const item of dailySplides) {
    item.addEventListener("click", (event)=>{
        if(lastSelected !== event.currentTarget){
            updateHourlySlides(forecastList, Number.parseInt(event.currentTarget.dataset.number));
            lastSelected.classList.remove("slide-focused");
            event.currentTarget.classList.add("slide-focused"); 
            lastSelected = event.currentTarget; 
        };
    });
};

async function updateWeatherData() {
    try {
        //TODO: add loading animation
        // let {current, forecast} = await getWeather();
        let current = JSON.parse(tempCurrent);
        let forecast = JSON.parse(tempForecast);
        // console.log(typeof current, JSON.stringify(current, null, "\t")); 
        // console.log(typeof forecast, JSON.stringify(forecast, null, "\t"));
        timezone = current.timezone; 
        forecastList = createForecastList(current, forecast);
        updateMainDisplay(current);
        updateDailySlides(current, forecastList);
        updateHourlySlides(forecastList, 0);
        //TODO: remove loading animation
    } catch (err) {
        console.log(err);
        showError();
    };
};

updateWeatherData();

function updateMainDisplay(current) {
    mainLocation.textContent = current.name + ", " + current.sys.country;
    mainLocation.prepend(mainLocationIcon);
    mainIcon.src = `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
    mainTemp.textContent = Math.round(current.main.temp) + tempUnitCelcius;
    mainWeatherDescription.textContent = current.weather[0].description;

    moreInfoUnitsData[0].textContent = Math.round(current.main.temp_min) + tempUnitCelcius;
    moreInfoUnitsData[1].textContent = Math.round(current.main.temp_max) + tempUnitCelcius;
    moreInfoUnitsData[2].textContent = Math.round(current.main.feels_like) + tempUnitCelcius;
    moreInfoUnitsData[3].textContent = Math.round(current.main.pressure) + " mb";
    moreInfoUnitsData[4].textContent = Math.round(current.main.humidity) + "%";
    moreInfoUnitsData[5].textContent = Math.round(current.clouds.all) + "%";
};

function convertToTimezone(timestamp, timezone){
    return new Date((timestamp + timezone) * 1000);
};

function createForecastList(current, forecast) {
    //create 5 elem list of maps, each for 1 day: 
    let forecastList = [];
    //dateTemp in local time (warsaw)
    let dateTemp = convertToTimezone(current.dt, current.timezone); 
    console.log(dateTemp.getUTCDate());

    for (let i = 0; i < 5; i++) {
        let forecastForDay = forecast.list.filter((item) => {
            let date = convertToTimezone(item.dt, current.timezone);
            if (date.getUTCDate() === dateTemp.getUTCDate()) return true;
        });
    
        forecastList.push(forecastForDay);
        dateTemp.setUTCDate(dateTemp.getUTCDate() + 1);
    };

    console.log("forecast list:", forecastList);
    return forecastList;
};

function updateDailySlides(current, forecastList) {
    //measurement times: 0:00, 3, 6, 9, 12, 15, 18, 21

    //today in forecast location (Warsaw) (for console display purpose only)
    let today = convertToTimezone(current.dt, current.timezone);
    console.log("time in selected timezone: ", today.getUTCHours(), today.getUTCMinutes());

    forecastList.forEach((day, i) => {
        // console.log("day slide for day:", i, day.length);
        if (i === 0) {
            if (day.length !== 0) {
                applyDailySlideData(getDailySlideData(day), i);
            } else {
                dailySlidesIcons[i].src = getIconURL(current.weather[0].icon);
                dailySlidesMax[i].textContent = Math.floor(current.main.temp_max) + tempUnitCelcius;
                dailySlidesMin[i].textContent = Math.floor(current.main.temp_min) + tempUnitCelcius;
                dailySlidesDesc[i].textContent = current.weather[0].description;
            };
        } else {
            applyDailySlideData(getDailySlideData(day), i);
        };
    });
};

function getDailySlideData(day) {
    //measurement times: 0:00, 3, 6, 9, 12, 15, 18, 21
    let tempMaxAvg = 0;
    let tempMinAvg = 0;

    // console.log("before splice:", day);

    if (day.length === 3) {
        day = day.slice(0, 2);
    } else if (day.length >= 4) {
        day = day.slice(-4, day.length - 1);
    };

    // console.log("after splice:", day);

    day.forEach(item => {
        tempMaxAvg += item.main.temp_max;
        tempMinAvg += item.main.temp_min;
    });

    tempMaxAvg = Math.round(tempMaxAvg / day.length);
    tempMinAvg = Math.round(tempMinAvg / day.length);

    let index = 0;
    if (day.length === 3) index++;

    let description = day[index].weather[0].description;
    let iconSrc = day[index].weather[0].icon;

    let currentDay = convertToTimezone(day[0].dt, timezone);

    console.log(currentDay, tempMaxAvg, tempMinAvg, description, iconSrc);
    return { currentDay, tempMaxAvg, tempMinAvg, description, iconSrc };
};

function applyDailySlideData(data, dayNumber) {
    if (dayNumber === 0) {
        dailySlidesDays[dayNumber].textContent = "Today";
    } else {
        let currentDayString = Intl.DateTimeFormat("en", { weekday: "short", day: "2-digit" }).format(data.currentDay);
        dailySlidesDays[dayNumber].textContent = currentDayString;
    };
    dailySlidesIcons[dayNumber].src = getIconURL(data.iconSrc);
    dailySlidesMax[dayNumber].textContent = data.tempMaxAvg + tempUnitCelcius;
    dailySlidesMin[dayNumber].textContent = data.tempMinAvg + tempUnitCelcius;
    dailySlidesDesc[dayNumber].textContent = data.description;
};

function updateHourlySlides(forecastList, day) {
    let forecast = forecastList[day];
    
    if (day === 0) {
        let itemsFromNextDayLength = 8 - forecastList[0].length;
        forecast = forecastList[0].concat(forecastList[1].slice(0, itemsFromNextDayLength)); 
    };

    forecast.forEach((item, i)=>{
        applyHourlySlideData(item, i);
    });
};

function applyHourlySlideData(data, hourNumber) {
    //convert forecast times to Warsaw timezone
    let forecastDate = convertToTimezone(data.dt, timezone);
    let today = convertToTimezone(new Date().valueOf() / 1000, timezone); 
    let timeString; 

    if(today.getDate() === forecastDate.getDate()){
        timeString = "Today, " + Intl.DateTimeFormat("en", {timeZone: "UTC", hour12: false, hour: "numeric", minute: "numeric" }).format(forecastDate);
    }else{
        timeString = Intl.DateTimeFormat("en", {timeZone: "UTC", hour12: false, weekday: "short", day: "2-digit", hour: "numeric", minute: "numeric" }).format(forecastDate);
    };
    
    hourlySlidesHours[hourNumber].textContent = timeString; 
    hourlySlidesIcons[hourNumber].src = getIconURL(data.weather[0].icon);
    hourlySlidesMax[hourNumber].textContent = Math.round(data.main.temp_max) + tempUnitCelcius;
    hourlySlidesMin[hourNumber].textContent = Math.round(data.main.temp_min) + tempUnitCelcius;
    hourlySlidesDesc[hourNumber].textContent = data.weather[0].description; 
};

function getIconURL(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

function showError() {
    console.log("I will show an error now");
};









