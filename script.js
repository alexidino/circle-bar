// function f(n) { 
//   if (n <= 0) {
//     return 1
//   } 
//   return n * f(n - 1);
// }
// console.log(f(4))

// +7 778 628 98 60 номер д Саши


// https://openweathermap.org/current


// Get all the anchor tags inside the navbar
const navbarLinks = document.querySelectorAll(".navbar a");

// Add click event listener to each navbar link
navbarLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove the "active" class from all links
    navbarLinks.forEach(link => link.classList.remove("active"));
    
    // Add the "active" class to the clicked link
    this.classList.add("active");
  });
});

// --------------------------------------------------------------------

// Get references to the HTML elements
const locationInput = document.getElementById('location');
const searchButton = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');

// Set up the OpenWeatherMap API URL and API key
const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '6c8026f18e16fc4c5a2542312bd8cfac';

// Function to fetch and display the weather information
function getWeather(location) {
  // Build the API URL with the location and API key
  const apiUrl = `${apiBaseUrl}?q=${location}&units=metric&appid=${apiKey}`;
  
  // Fetch the weather data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // console.log('data: ', data);
      // Extract the relevant weather data from the response
      const city = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      
      // Display the weather information in the HTML
      weatherDisplay.innerHTML = `
        <div class="weather-info">
          <div class="weather-icon"><i class="fas fa-sun"></i></div>
          <div class="weather-details">
            <div class="location-name">${city.toUpperCase()}</div>
            <div class="temperature">${temperature}°</div>
            <div class="description">${description}</div>
          </div>
        </div>
      `;
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error(error);
      weatherDisplay.innerHTML = `<p>Error fetching weather data for ${location}.</p>`;
    });
}

// Event listener for the search button
getWeather('Penza')

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  getWeather(location);
});






// function checkBrackets(str) {
//   const stack = [];

//   for(let i = 0; i < str.length; i++) {
//     const bracket = str[i];

//     if(bracket === '(') {
//       stack.push(bracket);

//     } else {
//       const stackDel = stack.pop();
//       console.log(stackDel)
//       if (!stackDel) return false;
//     }
//   }
//   console.log('stack.length: ', stack.length)
//   if(stack.length) return false;
//   return true;
// }

// console.log(checkBrackets("())"));






// const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9];

// function withoutReapeat(array) {
//   console.log(array[0])
//   const uniqueArr = [];
//   for ( let i = 0; i < array.length; i++) {
//     const first = array[i].shift();
//     if (array)
//   }
//   return uniqueArr;
// }


// const newArr = withoutReapeat(arr);
// console.log('newArr: ', newArr);

const svg = document.querySelector(".progress-ring");
const circle = document.querySelector('.progress-ring__circle');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
console.log('circumference: ', circumference);
circle.style.strokeDasharray = `${circumference} ${circumference}`

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}



// Calculate the angle between the center and the mouse position
function calculateAngle(event) {
  const rect = svg.getBoundingClientRect();
  const centerX = circle.getAttribute("cx");
  const centerY = circle.getAttribute("cy");

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
  const degrees = radians * (180 / Math.PI);

  return degrees >= -90 ? degrees : degrees + 360;
}

// Handle mousemove event
function handleMousemove(event) {
  const angle = calculateAngle(event) + 90;
  setProgress(angle / 3.6);
  // Здесь можно прописать Math.floor(angle / 3.6) + 1 , чтоб было 100
  const percent = angle / 3.6;

  const progressValue = document.querySelector('.progress-ring__value');
  progressValue.innerText = percent.toFixed(0);
  // Меняет background динамически
  circle.style.fill = `rgb(${percent * 2.56}, ${156 - percent * 1.56}, 0)`;
  // console.log("Angle:", angle);
  console.log("circle.style.fill: ", circle.style.fill);
}

// Add mousemove event listener to the SVG element
svg.addEventListener("mousemove", handleMousemove);

