const apiKey = "6899af26e37dd213c3ddec188d94c8f6";
const latitude = 52.22;
const longitude = 21.01;
const apiCurrentWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
const apiForecastLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
    return fetch(apiCurrentWeatherLink)
    .then((response) => {
        console.log(response.ok, response.status, response.statusText);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Current request unexpected status: ${response.status} - ${response.statusText}`);
        };
    }).then((body) => {
        //TODO: remove useless then 
        return body; 
    }).catch((error) => {
        console.error(error);
    });
};

async function getForecastWeather(){
    return fetch(apiForecastLink).
    then((response)=>{
        console.log(response.ok, response.status, response.statusText);
        if(response.ok){
            return response.json(); 
        }else{
            throw new Error(`Forecast request unexpected status: ${response.status} - ${response.statusText}`);
        };
    }).then((body)=>{
        //TODO: remove useless then 
        return body; 
    }).catch((error)=>{
        console.error(error);
    });
};

// let forecast = await getForecastWeather(); 
// let current = await getCurrentWeather();

//export methods, not temp data
export {tempCurrent, tempForecast} from "./tempData.js"; 









