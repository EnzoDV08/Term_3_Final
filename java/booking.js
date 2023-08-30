document.addEventListener("DOMContentLoaded", function () {
    const checkoutTrips = document.getElementById("checkout-trips");
    const totalAmountElement = document.getElementById("total-amount");
    const totalQuantityElement = document.getElementById("total-quantity");
    const checkoutButton = document.getElementById("checkout-button");
    let totalAmount = 0;
    let totalQuantity = 0;

    checkoutButton.addEventListener("click", function () {
        // Perform checkout logic here
        alert("Checkout successful!");
        checkoutTrips.innerHTML = "";
        totalAmount = 0;
        totalQuantity = 0;
        updateTotalAmountAndQuantity();
    });

    function addTripToCheckout(tripName, duration, price) {
        const tripCode = generateUniqueCode();
        const tripElement = document.createElement("div");
        tripElement.className = "checkout-trip";
        tripElement.innerHTML = `
            <p>${tripName}</p>
            <p>Duration: ${duration}</p>
            <p>Price: ${price}</p>
            <p>Code: ${tripCode}</p>
            <button class="remove-button">Remove</button>
            <hr>
        `;
        checkoutTrips.appendChild(tripElement);

        totalAmount += parseFloat(price.replace("R", ""));
        totalQuantity++;
        updateTotalAmountAndQuantity();

        const removeButtons = document.querySelectorAll(".remove-button");
        removeButtons.forEach(function (removeButton) {
            removeButton.addEventListener("click", function () {
                checkoutTrips.removeChild(tripElement);
                totalAmount -= parseFloat(price.replace("R", ""));
                totalQuantity--;
                updateTotalAmountAndQuantity();
            });
        });
    }

    function updateTotalAmountAndQuantity() {
        totalAmountElement.textContent = `R${totalAmount.toFixed(2)}`;
        totalQuantityElement.textContent = totalQuantity;
    }

    // Helper function to generate a unique code
    function generateUniqueCode() {
        return Math.random().toString(36).substr(2, 9);
    }

    const bookNowButtons = document.querySelectorAll(".card-btn");
    bookNowButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const tripName = button.closest(".card").querySelector(".card-title").textContent;
            const tripDuration = button.closest(".card").querySelector(".card-info[data-duration]").getAttribute("data-duration");
            const tripPrice = button.closest(".card").querySelector(".card-info[data-price]").getAttribute("data-price");
            addTripToCheckout(tripName, tripDuration, tripPrice);
        });
    });
});