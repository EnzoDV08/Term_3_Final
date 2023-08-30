
// ------------------------------------------------------------------------
// When a filter or sort option is clicked
// ------------------------------------------------------------------------

$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');

  filterTrips();
});

$("input[name='sortRadio']").click(function(){
  appliedSort = $(this).attr('value');

  filterTrips();
});

function filterTrips() {
  
  let sortTrips = [];

  console.log(appliedFilter);
  console.log(appliedSort);

  // Filter 

  if (appliedFilter) {
    sortTrips = locationsArray.filter(trips => trips.destinations == appliedFilter);
  } else {
    sortTrips = locationsArray;
  }

  // Sorting

  if (appliedSort == "low to high") {

    // Sort price
    sortTrips = sortTrips.sort((a, b) => {
      return a.price - b.price;
    });

  } else if (appliedSort == "duration") {

    // Sort duration
    sortTrips = sortTrips.sort((a, b) => {
      return a.duration - b.duration;
    });

  } else if (appliedSort == "date added") {

    // Sort  from the newest to oldest
    sortTrips = sortTrips.sort((a, b) => {
      let da = new Date(a.addedDate);
      let db = new Date(b.addedDate);
    
      return db - da;
    });

  }

  console.log(sortTrips)

  loadTrips(sortTrips);

}
