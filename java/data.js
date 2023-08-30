console.log("Hello World");

const locationsArray = [
  {
    tripName: "Maldives",
    destinations: "Multi-Destination",
    description: "Experience the mesmerizing Maldives archipelago with an unforgettable 10-day multi-island adventure. Immerse yourself in the beauty of the turquoise waters, pristine beaches, and vibrant coral reefs that Maldives has to offer.",
    image: "Maldives.webp",
    duration: 10,
    addedDate: "2023-03-13",
    price: 50000,
  },
  {
    tripName: "Caribbean",
    destinations: "Single-Destination",
    description: "Experience the Caribbean paradise on a 7-day stay in a luxury resort. Enjoy white sandy beaches, lush tropical landscapes, and vibrant local culture.",
    image: "Caribbean.jpg",
    duration: 7,
    addedDate: "2023-04-25",
    price: 25000,
  },
  {
    tripName: "Seychelle",
    destinations: "Multi-Destination",
    description: "Explore the breathtaking Seychelles archipelago with a 10-day multi-island tour. Enjoy crystal-clear waters, stunning beaches, and vibrant coral reefs.",
    image: "seychelle.avif",
    duration: 5,
    addedDate: "2023-12-25",
    price: 20000,
  },
  {
    tripName: "Mozambique",
    destinations: "Single-Destination",
    description: "Embark on an extraordinary journey to Mozambique for a 3-day tropical escape like no other. Unwind amidst the paradise of palm-fringed beaches, explore the vibrant marine life of coral reefs, and immerse yourself in the local rhythms and flavors.",
    image: "Mozambique.jpg",
    duration: 3,
    addedDate: "2023-11-14",
    price: 10000,
  },
  {
    tripName: "Tailand",
    destinations: "Single-Destination",
    description: "Indulge in a Thai paradise with a luxurious 12-day resort getaway. Immerse yourself in the beauty of pristine beaches, verdant tropical scenery, and the lively local culture.",
    image: "Tailand.jpg",
    duration: 12,
    addedDate: "2023-01-25",
    price: 35000,
  },
  {
    tripName: "French Riviera",
    destinations: "Single-Destination",
    description: "Embark on a 9-day Riviera retreat and immerse yourself in the elegance of the French coastline. Revel in the allure of sandy beaches, picturesque landscapes, and the vibrant charm of local culture.",
    image: "French.jpg",
    duration: 9,
    addedDate: "2023-02-25",
    price: 45000,
  },
];
  
let appliedFilter = "";
let appliedSort = "date added";


$(document).ready(function(){

  filterTrips();

});


function loadTrips(showTrips) {
  
  $("#destination-cards").empty();

  for (let i = 0; i < showTrips.length; i++) {
    const trips = showTrips[i];
    
    // console.log(trips.tripName);

    $("#destination-cards").append($("#tripTemplate").html());

    let currentChild = $("#destination-cards").children().eq(i);

    $(currentChild).find("#tripName").text(trips.tripName);
    $(currentChild).find("#tripPrice").text("R" + trips.price);
    $(currentChild).find("#description").text(trips.description);
    $(currentChild).find("#duration").text("Trip Duration: days," + trips.duration);
    $(currentChild).find(".card-img").attr('src','/img/' + trips.image);


    $(currentChild).find("#description").hide();  
  };
};
  

