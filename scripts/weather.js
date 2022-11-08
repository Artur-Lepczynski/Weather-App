//TODO: hide new api key, deactivate current
const apiKey = "6899af26e37dd213c3ddec188d94c8f6";

async function getCurrentWeather(latitude, longitude) {
    const apiCurrentWeatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    return fetch(apiCurrentWeatherLink)
    .then((response) => {
        console.log(response.ok, response.status, response.statusText);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Current weather request unexpected status: ${response.status} - ${response.statusText}`);
        };
    });
};

async function getForecastWeather(latitude, longitude){
    const apiForecastLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    return fetch(apiForecastLink).
    then((response)=>{
        console.log(response.ok, response.status, response.statusText);
        if(response.ok){
            return response.json(); 
        }else{
            throw new Error(`Forecast request unexpected status: ${response.status} - ${response.statusText}`);
        };
    });
};

async function getWeather(latitude = 52.22, longitude = 21.01){
    let [current, forecast] = await Promise.all([getCurrentWeather(latitude, longitude), getForecastWeather(latitude, longitude)]); 
    return {current, forecast};
};

//TODO: export method, not temp data
export {tempCurrent, tempForecast} from "./tempData.js"; 
export {getWeather}; 








