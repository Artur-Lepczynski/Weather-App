import "../node_modules/@splidejs/splide/dist/js/splide.min.js"; 
//import methods and call with await, not temp data 
import { tempCurrent, tempForecast } from "./weather.js";

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
        400:{
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
        400:{
            perPage: 1,
        }
    } 
}).mount();













