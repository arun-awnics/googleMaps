function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), { //Initializing the google map
    center: {
      lat: 13.000269,
      lng: 77.574641
    }, //initial position of the map
    zoom: 11 //initial zoom value
  });

  //receiving input from the HTML search box 
  var input = document.getElementById('userIp');
  //autocomplete function helps the user to autofill the search box 
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  //positioning the search box towards the top left corner of the map
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow(); //initializing the infowindow object
  var marker = new google.maps.Marker({ //initializing the marker object
    map: map
  });

  marker.addListener('click', function() { //adding a listener for the click event
    infowindow.open(map, marker); //opens the infowindow on mouse click
  });

  autocomplete.addListener('place_changed', function() { //close the infowindow
    infowindow.close();
    var place = autocomplete.getPlace(); //returns if the input location is not found
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport); //does no change
    } else {
      map.setCenter(place.geometry.location); //position the marker after receiving the location from the user
      map.setZoom(17); //sets the zoom of the map to 17
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);

    //set the content of the infowindow
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      '<br>' +
      place.formatted_address);
  });
}