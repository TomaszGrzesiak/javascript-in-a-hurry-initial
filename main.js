// Main Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

// Greeting Section

function celsiusToFahr(temperature) {
  return (temperature * 9) / 5 + 32;
}

const greetingText = "Good aternoon!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.8673;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it\'s ${temperature.toFixed(
  1
)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it\'s ${celsiusToFahr(
  temperature
).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

//console.log(temperature.toFixed(1) + `°C = ${celsiusToFahr(temperature).toFixed(1)} °F`)

document.querySelector(".weather-group").addEventListener("click", (e) => {
  if (e.target.id == "celsius")
    document.querySelector("p#weather").innerHTML = celsiusText;
  if (e.target.id == "fahr")
    document.querySelector("p#weather").innerHTML = fahrText;
});

setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours]").textContent =
    localTime.getHours();
  document.querySelector("span[data-time=minutes]").textContent =
    localTime.getMinutes();
  document.querySelector("span[data-time=seconds]").textContent =
    localTime.getSeconds();
}, 1000);
