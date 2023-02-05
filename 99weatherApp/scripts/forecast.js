/*FOR INTERACTING WITH APIS */

/*https://developer.accuweather.com/user/me/apps */
const key = '	44eE4A02A7AaOwLRLjT4b7L49NHZNekb';  //50requests per day

//get weather information
const getWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();  //re.json return promise so awaiting for promise to resolve

    // console.log(data);
    return data[0];

}




//get city information
const getCity = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'  //base url of endpoint
    const query = `?apikey=${key}&q=${city}`;//? means we're adding query parameters to the end of url

    const response = await fetch(base+query);
    const data = await response.json();

    //console.log(data[0]);  //may show large array, 0 index is closest match
    return data[0];  //we need key of city provided by api1 to make second request

    //as this is async function, this returns a promise so we use then()
};

/*
getCity('manchester')
.then(data=>  getWeather(data.Key))   //this provides city key for next weather api to search temperature
.then(data => {
    console.log(data);      //this is data of city tempetature etc (data of second api)
})         
.catch(err=> console.log(err)); 
*/

