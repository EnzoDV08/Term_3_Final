document.addEventListener("DOMContentLoaded", function () {
    const allDestinationsCheckbox = document.getElementById("allDestinations");
    const shortDurationCheckbox = document.getElementById("shortDuration");
    const longDurationCheckbox = document.getElementById("longDuration");
    const singleDestinationCheckbox = document.getElementById("singleDestination");
    const multiDestinationsCheckbox = document.getElementById("multiDestinations");
    const roundTripsCheckbox = document.getElementById("roundTrips");
    const rowBoatSpecialCheckbox = document.getElementById("rowBoatSpecial");

    const destinationList = document.getElementById("destinationList");

    // Sample destination data
    const destinations = [
        { name: "Destination A", duration: 3, single: true, multi: false, roundTrip: true, price: 200 },
        // Add more destination objects here
    ];

    // Function to render destination items
    function renderDestinations(filteredDestinations) {
        destinationList.innerHTML = "";

        filteredDestinations.forEach(destination => {
            const destinationItem = document.createElement("div");
            destinationItem.classList.add("destination-item");
            destinationItem.innerHTML = `
                <h2>${destination.name}</h2>
                <p>Duration: ${destination.duration} days</p>
                <p>Price: $${destination.price}</p>
            `;
            destinationList.appendChild(destinationItem);
        });
    }

    // Attach event listeners to checkboxes
    function updateFilter() {
        const filteredDestinations = destinations.filter(destination => {
            return (
                (allDestinationsCheckbox.checked ||
                    (shortDurationCheckbox.checked && destination.duration <= 5) ||
                    (longDurationCheckbox.checked && destination.duration > 5)) &&
                (singleDestinationCheckbox.checked && destination.single ||
                    multiDestinationsCheckbox.checked && destination.multi) &&
                (roundTripsCheckbox.checked && destination.roundTrip) &&
                (rowBoatSpecialCheckbox.checked || false) // Additional logic for top 5 cheapest trips
            );
        });

        renderDestinations(filteredDestinations);
    }

    allDestinationsCheckbox.addEventListener("change", updateFilter);
    shortDurationCheckbox.addEventListener("change", updateFilter);
    longDurationCheckbox.addEventListener("change", updateFilter);
    singleDestinationCheckbox.addEventListener("change", updateFilter);
    multiDestinationsCheckbox.addEventListener("change", updateFilter);
    roundTripsCheckbox.addEventListener("change", updateFilter);
    rowBoatSpecialCheckbox.addEventListener("change", updateFilter);

    // Initial rendering
    renderDestinations(destinations);
});



//weather for main page
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "1dc50b8b17ea6338fc64d3e9222fb73a";
    const locationName = document.getElementById("location-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    // Get user's current location
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const location = data.name;
                    const temp = data.main.temp;
                    const desc = data.weather[0].description;

                    locationName.textContent = `Location: ${location}`;
                    temperature.textContent = `Temperature: ${temp}°C`;
                    description.textContent = `Description: ${desc}`;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    locationName.textContent = "Weather data not available.";
                    temperature.textContent = "";
                    description.textContent = "";
                });
        });
    } else {
        locationName.textContent = "Geolocation not available.";
        temperature.textContent = "";
        description.textContent = "";
    }
});