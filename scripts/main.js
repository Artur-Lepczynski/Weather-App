//import "../node_modules/@splidejs/splide/dist/js/splide.min.js"; 
import { getWeather, tempCurrent, tempForecast } from "./weather.js";
import { tempLatitude, tempLongitude, setViewAndMarker } from "./map.js";

const dailySplideElement = document.querySelector("#daily-splide");
const hourlySplideElement = document.querySelector("#hourly-splide");
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
        720: {
            perPage: 2,
        },
        470: {
            perPage: 1,
        }
    }
};

new Splide(dailySplideElement, splideOptions).mount();
const hourlySplide = new Splide(hourlySplideElement, splideOptions);
hourlySplide.mount(); 

const tempUnitCelcius = "°c";
const mainLocationIcon = document.createElement("i");
mainLocationIcon.className = "fa-solid fa-location-dot";
mainLocationIcon.style.marginRight = "6px";

const mainReloadIcon = document.createElement("i"); 
mainReloadIcon.className = "fa-solid fa-rotate-right";
mainReloadIcon.id = "main-display-reload"; 
mainReloadIcon.style.marginLeft = "6px";
mainReloadIcon.style.cursor = "pointer"; 

const dayTheme = document.querySelector("#style-day");
const nightTheme = document.querySelector("#style-night");

const mainDisplay = document.querySelector("#main-display"); 
const mainLocation = document.querySelector("#main-display-location");
const mainDate = document.querySelector("#main-display-date");
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
let lastSelected;

export let latitude = 52.22;
export let longitude = 21.01;
let forecastList; 
let timezone; 

const mapPopup = document.querySelector("#map-popup-wrapper");
const mapPopupButtonSelect = document.querySelector("#button-select"); 
const mapPopupButtonCancel = document.querySelector("#button-cancel"); 

mainLocation.addEventListener("click", (event)=>{
    mapPopup.classList.remove("popup-hidden");
});

mainLocation.addEventListener("mouseenter", (event)=>{
    mainLocationIcon.style.transform = "scale(1.2)";
});

mainLocation.addEventListener("mouseleave", (event)=>{
    mainLocationIcon.style.transform = "none";
});

mapPopupButtonSelect.addEventListener("click", (event)=>{
    mapPopup.classList.add("popup-hidden");
    latitude = tempLatitude; 
    longitude = tempLongitude; 
    updateWeatherData(latitude, longitude);
});

mapPopupButtonCancel.addEventListener("click", (event)=>{
    mapPopup.classList.add("popup-hidden");
    setTimeout(()=>{
        setViewAndMarker(latitude, longitude);
    }, 100); 
});

const errorPopup = document.querySelector("#error-popup-wrapper");
const errorPopupButtonReload = document.querySelector("#button-reload"); 
const errorPopupMessage = document.querySelector("#error-popup-message"); 

function showError(error) {
    errorPopup.classList.remove("popup-hidden");
    errorPopupMessage.textContent = error; 
};

errorPopupButtonReload.addEventListener("click", (event)=>{
    history.go(0);
});

mainReloadIcon.addEventListener("click", (event)=>{
    updateWeatherData(latitude, longitude);
    hourlySplide.go(0);
});

for (const item of dailySplides) {
    item.addEventListener("click", (event)=>{
        selectDailySlide(event.currentTarget);
    });
};

function selectDailySlide(slide){
    if(lastSelected !== slide){
        updateHourlySlides(forecastList, Number.parseInt(slide.dataset.number));
        lastSelected?.classList.remove("slide-focused");
        slide.classList.add("slide-focused"); 
        lastSelected = slide;
        hourlySplide.go(0);
    };
};

async function updateWeatherData(latitude, longitude) {
    try {
        toggleLoadingAnimation(true); 
        let {current, forecast} = await getWeather(latitude, longitude);
        // let current = JSON.parse(tempCurrent);
        // let forecast = JSON.parse(tempForecast);
        timezone = current.timezone; 
        forecastList = createForecastList(current, forecast);
        selectDailySlide(dailySplides[0]);
        updateMainDisplay(current);
        updateDailySlides(current, forecastList);
        updateHourlySlides(forecastList, 0);
        updateTheme(current); 
        toggleLoadingAnimation(false); 
    } catch (error) {
        console.log(error);
        showError(error.message);
    };
};

updateWeatherData(latitude, longitude);

function updateTheme(current){
    let time = current.weather[0].icon; 
    time = time[time.length - 1]; 
    if(time === "n"){
        dayTheme.disabled = true; 
        nightTheme.disabled = false; 
    }else{
        dayTheme.disabled = false; 
        nightTheme.disabled = true; 
    };
};

function toggleLoadingAnimation(on){
    let temp = [dailySplideElement, hourlySplideElement, mainDisplay]; 
    if(on){
        temp.forEach((item)=>{item.classList.add("display-loading")}); 
    }else{
        temp.forEach((item)=>{item.classList.remove("display-loading")}); 
    };
};

function updateMainDisplay(current) {
    // mainLocation.textContent = (current.name || "unknown") + ", " + (current.sys.country || "--");
    mainLocation.textContent = current.name ? current.name + ", " + current.sys.country : "unknown";
    mainLocation.prepend(mainLocationIcon);

    let date = convertToTimezone(current.dt, current.timezone);
    let dateString = Intl.DateTimeFormat("gb", 
    {timeZone: "UTC", 
    weekday: "short",
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric",
    hour: "2-digit", 
    minute: "2-digit",
    hour12: false
    }).format(date);
    mainDate.textContent = dateString; 
    mainDate.append(mainReloadIcon); 

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
    let forecastList = [];
    let dateTemp = convertToTimezone(current.dt, current.timezone); 

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

    forecastList.forEach((day, i) => {
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
    let tempMaxAvg = 0;
    let tempMinAvg = 0;

    if (day.length === 3) {
        day = day.slice(0, 2);
    } else if (day.length >= 4) {
        day = day.slice(-4, day.length - 1);
    };

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
    let forecastDate = convertToTimezone(data.dt, timezone);
    let today = convertToTimezone(new Date().valueOf() / 1000, timezone); 
    let timeString; 

    if(today.getUTCDate() === forecastDate.getUTCDate()){
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