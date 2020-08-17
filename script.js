//Create variable that holds emtpy array 
let history = []; 

let userInput = document.getElementById('city').value; 

let dateToday = new Date(); 


//functionality of code 
let addCity = (ev) => {
  ev.preventDefault(); //prevents the form from submitting 
  userInput = document.getElementById('city').value; //variable set to user input value 
  history.push(userInput); //pushes user input value into empty array 
  document.querySelector('form').reset(); //resets the form "clears" for next input value

  console.log('added', history ); 
  let searchHistory = document.querySelector('.city-container'); //variable that is set to querySelect the city-container which pulls in on line 25 the text content 
  searchHistory.textContent = (history); 


//Locally storing history of user input values 
  localStorage.setItem('userSearchList', JSON.stringify(history) );
  }

// //Adding event listener and passing through the function addCity
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn1').addEventListener('click', addCity);
});

//button click event to execute API call 

$('#btn1').on('click', function () {
        var userAPI = $("#city").val();      
        searchWeather(userAPI); 
        console.log(userAPI);
    });

//Function to execute the API call 
function searchWeather(userAPI) {
  $('.API-container').empty(); 
  $('.container-time').empty(); 
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + userAPI + '&appid=ce3b9593e61b336933f1777b5554991c';


$.ajax ({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log('City Name:', response.name);
    console.log('Temperature: ', response.main.temp);
    console.log('Humidity:', response.main.humidity); 
    console.log('Wind Speed: ', response.wind.speed);

//Create variables that are assigned to specific API data being called 

    var h2 = $('<h2>').addClass('API-container').text(userInput);
    console.log(h2);

    var temp = $('<p>').addClass('API-container').text("Temperature:" + response.main.temp + " F"); 
    console.log(temp);

    var humidity = $('<p>').addClass('API-container').text("Humidity:" + response.main.humidity + "%"); 
    console.log(humidity);

    var wind = $('<p>').addClass('API-container').text("Wind Speed:" + response.wind.speed + " MPH"); 
    console.log(wind);  




//Append everything

    $('.container-time').append(dateToday);

    $('.API-container').append(h2, temp, humidity, wind);

    $("#city").text(JSON.stringify(response)); 
  }).catch(function(error){
    console.log(error)
  })
};
















