//import "../node_modules/@splidejs/splide/dist/js/splide.min.js"; 
import { getWeather, tempCurrent, tempForecast } from "./weather.js";

let dailySplide = document.querySelector("#daily-splide");
let hourlySplide = document.querySelector("#hourly-splide"); 

new Splide(dailySplide, {
    perPage: 5, 
    perMove: 1,
    gap: "10px",
    pagination: false, 
    drag: true,
    breakpoints: {
        970:{
            perPage: 3, 
        }, 
        600:{
            perPage: 2,
        },
        370:{
            perPage: 1,
        }
    } 
}).mount();

new Splide(hourlySplide, {
    perPage: 5, 
    perMove: 1,
    gap: "10px",
    pagination: false, 
    drag: true,
    breakpoints: {
        970:{
            perPage: 3, 
        }, 
        600:{
            perPage: 2,
        },
        370:{
            perPage: 1,
        }
    } 
}).mount();

try{
    // let {current, forecast} = await getWeather(30.08258, 31.14567);
    let current = JSON.parse(tempCurrent); 
    let forecast = JSON.parse(tempForecast); 
    console.log(typeof current, current); 
    console.log(typeof forecast, forecast);
}catch(err){
    console.log(err); 
    showError(); 
};

function showError(){
    console.log("I will show an error now"); 
}; 









