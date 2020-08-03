//Created variable that holds an emtpy array 
let history = []; 

//functionality of code 
let addCity = (ev) => {
  ev.preventDefault(); //prevents the form from submitting 
  let userInput = document.getElementById('city').value; //variable set to user input value 
  history.push(userInput); //pushes user input value into empty array 
  document.querySelector('form').reset(); //resets the form "clears" for next input value

  console.log('added', history ); 
  let searchHistory = document.querySelector('.city-container'); //variable that is set to querySelect the city-container which pulls in on line 25 the text content 
  searchHistory.textContent = (history); 

//Locally storing history of user input values 
  localStorage.setItem('userSearchList', JSON.stringify(history) );
  }

//Adding event listener and passing through the function addCity
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn1').addEventListener('click', addCity);
});

//button click event to execute the API call 

$('#btn1').on('click', function () {
        var userAPI = $("#city").val();      
        searchWeatherTrips(userAPI); 
        console.log(userAPI);
    });

//Function to execute once the API is called 
function searchWeatherTrips(userAPI) {
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + userAPI + '&appid=ce3b9593e61b336933f1777b5554991c';
$.ajax ({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#city").text(JSON.stringify(response)); 
  });
};


// for() {
//     var li =$("<li>").addClass("list-group-item").text(history[i]);
//     $(".cities").append(li);
// };






