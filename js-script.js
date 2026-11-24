// Questions Button
document.addEventListener("DOMContentLoaded", function () {
  const questionsButton = document.getElementById("questions-button");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nharoldhho7@gmail.com");
    });
  }
});

// Google Maps Initialization
function initMap() {
  const chicago = {
    lat: 41.8781,
    lng: -87.6298
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: chicago,
    zoom: 12,
    mapTypeControl: true,
    zoomControl: true,
    fullscreenControl: true,
    streetViewControl: true
  });

  // Feature 1: Map markers
  const locations = [
    {
      name: "Illinois Institute of Technology",
      position: {
        lat: 41.831,
        lng: -87.627
      },
      description: "Illinois Institute of Technology in Chicago."
    },
    {
      name: "Millennium Park",
      position: {
        lat: 41.8826,
        lng: -87.6226
      },
      description: "Millennium Park is a popular park in downtown Chicago."
    },
    {
      name: "Grant Park",
      position: {
        lat: 41.8721,
        lng: -87.6197
      },
      description: "Grant Park is a large public park in Chicago."
    }
  ];

  // Feature 2: Clickable markers and information windows
  locations.forEach(function (location) {
    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.name
    });

    const infoWindow = new google.maps.InfoWindow({
      content:
        "<h3>" +
        location.name +
        "</h3><p>" +
        location.description +
        "</p>"
    });

    marker.addListener("click", function () {
      infoWindow.open({
        anchor: marker,
        map: map
      });
    });
  });

  // Feature 3: Map controls
  // Zoom, map type, fullscreen, and Street View controls
  // are enabled in the map options above.
}