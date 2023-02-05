/*FOR INTERACTING WITH APIS */
class Forecast{
    constructor(){ //we re not adding parameters because theyre not gonna have any unique properties
        this.key = '44eE4A02A7AaOwLRLjT4b7L49NHZNekb';  /*api key-->https://developer.accuweather.com/user/me/apps *///50requests per day
        this.weatheURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'; ///base url of endpoint
    }


    async updateCity(city){  //this is how async mehtod is given
        const cityDetails = await this.getCity(city);  //'this' because getCity lies in this class
        const weather = await this.getWeather(cityDetails.Key); //id of key
        return {  //returnning object
            // cityDetails: cityDetails,
            // weather: weather
            //do below if property:value pair are same(object shorthand notaition)
            cityDetails,
            weather
        };
    }

    async getCity(city){  //get city information

        
        const query = `?apikey=${this.key}&q=${city}`;//? means we're adding query parameters to the end of url

        const response = await fetch(this.cityURI+query);
        const data = await response.json();

        //console.log(data[0]);  //may show large array, 0 index is closest match
        return data[0];  //we need key of city provided by api1 to make second request

        //as this is async function, this returns a promise so we use then()
    }

    async getWeather(id){   //get weather information
    
        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.weatheURI+query);
        const data = await response.json();  //re.json return promise so awaiting for promise to resolve
    
        // console.log(data);
        return data[0];
    }
}





/*
getCity('manchester')
.then(data=>  getWeather(data.Key))   //this provides city key for next weather api to search temperature
.then(data => {
    console.log(data);      //this is data of city tempetature etc (data of second api)
})         
.catch(err=> console.log(err)); 
*/

