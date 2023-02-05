/*FOR INTERACTING WITH DOM manipulation */

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')  //image with class of time
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{  //data is object here
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //in above constants, cityDetails and weather are same...so we can aslo put them in constants in other easy way
    //that is DESTRUCTURING...means put weather property of data to weather const and same for data
    const {cityDetails, weather}  = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //update the day and night images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;  //weathericon property returns number 1 to 44
    icon.setAttribute('src',iconSrc);

    //TERNARY OPERATOR--->  condition?'value 1':'value 2';
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';  //insted of if else this is good
    // let timesrc = null;
    // if(weather.IsDayTime){  //insted of this if..else we used ternary operatior above
    //     timesrc = 'img/day.svg';
    // }
    // else{
    //     timesrc = 'img/night.svg';
    // }
    time.setAttribute('src',timeSrc);

    //remove the d-none class of card if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {  //returnning object
        // cityDetails: cityDetails,
        // weather: weather
        //do below if property:value pair are same(object shorthand notaition)
        cityDetails,
        weather
    };
}

cityForm.addEventListener('submit',(e)=>{
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();    //city is name of input field
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data=> updateUI(data))
    .catch(err=> console.log(err));


    //set local storage
    localStorage.setItem('city',city);
    //everytime user enters a new location we are storing it in a city(most recent location)

});

if(localStorage.getItem('city')){  //if exists string exists, string of any length is truthy
    updateCity(localStorage.getItem('city')).then(data=>updateUI(data))
    .catch(err=> console.log(err));
}


//better comments extension makes comment better
//*important information is highlighted comment
//!depreciated method, do not use....this is for alerts!!
//?should this method be exposed to public api? for query
//TODO: refactor this method so that it conforms the api
////this line of code is line through