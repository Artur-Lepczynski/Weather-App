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
        1200:{
            perPage: 4
        },
        970:{
            perPage: 3, 
        }, 
        670:{
            perPage: 2,
        },
        370:{
            perPage: 1,
        }
    } 
};

new Splide(dailySplide, splideOptions).mount();
new Splide(hourlySplide, splideOptions).mount();

const tempUnitCelcius = "°c"; 
const mainLocationIcon = document.createElement("i");
mainLocationIcon.className= "fa-solid fa-location-dot";
mainLocationIcon.style.marginRight = "6px";

const mainLocation = document.querySelector("#main-display-location"); 
const mainIcon = document.querySelector("#main-display-icon"); 
const mainTemp = document.querySelector("#main-display-temp"); 
const mainWeatherDescription = document.querySelector("#weather-description");

const moreInfoUnitsArray = Array.from(document.querySelectorAll(".more-info-unit"));
const moreInfoUnitsData = moreInfoUnitsArray.map((item)=>item.children[1]);

//select slide elements
const dailySlidesDays = Array.from(document.querySelectorAll(".daily-splide-day"));
const dailySlidesIcons = Array.from(document.querySelectorAll(".daily-splide-icon"));
const dailySlidesMax = Array.from(document.querySelectorAll(".daily-splide-temp-max"));
const dailySlidesMin = Array.from(document.querySelectorAll(".daily-splide-temp-min"));
const dailySlidesDesc = Array.from(document.querySelectorAll(".daily-splide-desc"));

async function updateWeatherData(){
    try{
        //TODO: add loading animation
        // let {current, forecast} = await getWeather();
        let current = JSON.parse(tempCurrent); 
        let forecast = JSON.parse(tempForecast); 
        console.log(typeof current, current); 
        // console.log(typeof forecast, JSON.stringify(forecast, null, "\t"));
        updateMainDisplay(current); 
        updateDailySlides(current, forecast); 
        //TODO: remove loading animation
    }catch(err){
        console.log(err); 
        showError(); 
    };    
};

updateWeatherData();

function updateMainDisplay(current){
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

function updateDailySlides(current, forecast){
    //create 5 elem list of maps, each for 1 day: 
    let forecasts5Days = [];
    let dateTemp = new Date();

    for (let i = 0; i < 5; i++) {
        let tempMap = new Map(); 
        forecast.list.forEach((item)=>{
            let date = new Date(item.dt * 1000); 
            if(date.getDate() === dateTemp.getDate()){
                tempMap.set(date.getHours() - 1, item);
            }; 
        });
        forecasts5Days.push(tempMap); 
        dateTemp.setDate(dateTemp.getDate() + 1); 
    };
    console.log(forecasts5Days); 

    //measurement times: 0:00, 3, 6, 9, 12, 15, 18, 21
    //get slide data:
    let today = new Date();
    console.log("today's hour:", today.getHours());

    forecasts5Days.forEach((day, i)=>{
        if(i === 0){
            if(today.getHours() < 12){
                applyDailySlideData(getSlideData(day), i);
            }else if(today.getHours() < 15){
                applyDailySlideData(getSlideData(day, 15), i);
            }else if(today.getHours() < 18){
                applyDailySlideData(getSlideData(day, 18, 21), i);
            }else if(today.getHours() < 21){
                applyDailySlideData(getSlideData(day, 21, 21), i);
            }else{
                dailySlidesIcons[i].src = getIconURL(current.weather[0].icon); 
                dailySlidesMax[i].textContent = Math.floor(current.main.temp_max) + tempUnitCelcius;
                dailySlidesMin[i].textContent = Math.floor(current.main.temp_min) + tempUnitCelcius;
                dailySlidesDesc[i].textContent = current.weather[0].description; 
            };
        }else{
            applyDailySlideData(getSlideData(day), i);
        };
    });
};

function getSlideData(day, hourStart = 12, hourEnd = 18){
    let tempMaxAvg = 0;
    let tempMinAvg = 0; 
    let numberOfMeasurements = ((hourEnd - hourStart) / 3) + 1; 

    for (let i = hourStart; i <= hourEnd; i += 3) {
        tempMaxAvg += day.get(i).main.temp_max;
        tempMinAvg += day.get(i).main.temp_min; 
    };
    tempMaxAvg = Math.floor(tempMaxAvg / numberOfMeasurements); 
    tempMinAvg = Math.floor(tempMinAvg / numberOfMeasurements); 

    if(hourStart < 21) hourStart += 3; 
    let description = day.get(hourStart).weather[0].description; 
    let iconSrc = day.get(hourStart).weather[0].icon;

    let currentDay = new Date(day.get(hourStart).dt * 1000);

    console.log(currentDay, tempMaxAvg, tempMinAvg, description, iconSrc);
    return {currentDay, tempMaxAvg, tempMinAvg, description, iconSrc};
};

// const dailySlidesDays = Array.from(document.querySelectorAll(".daily-splide-day"));
// const dailySlidesIcons = Array.from(document.querySelectorAll(".daily-splide-icon"));
// const dailySlidesMax = Array.from(document.querySelectorAll(".daily-splide-temp-max"));
// const dailySlidesMin = Array.from(document.querySelectorAll(".daily-splide-temp-min"));
// const dailySlidesDesc = Array.from(document.querySelectorAll(".daily-splide-desc"));

function applyDailySlideData(data, dayNumber){
    if(dayNumber === 0){
        dailySlidesDays[dayNumber].textContent = "Today"; 
    }else{
        let currentDayString = Intl.DateTimeFormat("en", {weekday: "short", day: "2-digit"}).format(data.currentDay);
        dailySlidesDays[dayNumber].textContent = currentDayString; 
    };
    dailySlidesIcons[dayNumber].src = getIconURL(data.iconSrc);
    dailySlidesMax[dayNumber].textContent = data.tempMaxAvg + tempUnitCelcius;
    dailySlidesMin[dayNumber].textContent = data.tempMinAvg + tempUnitCelcius; 
    dailySlidesDesc[dayNumber].textContent = data.description; 
};

function getIconURL(icon){
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

function showError(){
    console.log("I will show an error now"); 
}; 









