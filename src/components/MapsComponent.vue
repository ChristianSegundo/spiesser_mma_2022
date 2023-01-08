<template>
  <div class="mapwrapper">
    <input v-if="!vorschau" id="pac-input" class="controls" type="text" placeholder="Wo findet dein Event statt?" />
    <h2 v-else>{{ new_event.ort.name }}</h2>
    <div id="map"></div>
  </div>

</template>
  
<script>
import { new_event } from '../events/new_event.js'


export default {
  name: 'MapsComponent',
  props: {
    vorschau: Boolean,
    latitude: Number,
    longitude: Number
  },

  mounted() {


    if (this.vorschau == true) {

      var latitude = this.latitude;
      var longitude = this.longitude;

      let eventMap = document.createElement('script')
      eventMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBAcW_RJ7uqZStGzZocVsZioIUyow_Q6ss&callback=initVorschauMap&libraries=places&v=weekly')
      document.head.appendChild(eventMap)


      function initVorschauMap() {


        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: latitude, lng: longitude },
          zoom: 12,
          mapTypeId: "roadmap",
        });

        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
        });

      };

      window.initVorschauMap = initVorschauMap;
    }

    else {

      let eventMap = document.createElement('script')
      eventMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBAcW_RJ7uqZStGzZocVsZioIUyow_Q6ss&callback=initAutocomplete&libraries=places&v=weekly')
      document.head.appendChild(eventMap)

      function initAutocomplete() {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 47.3853961, lng: 8.5305746 },
          zoom: 12,
          mapTypeId: "roadmap",
        });
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);

        //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds());
        });


        // Setze Marke nur dann Neu wenn es keine VorschauMap ist:

        let markers = [];
        // Clear out the old markers.
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }


          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds();

          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }

            const icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
              new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
              })
            );

            console.log("marker " + markers.length + " name=" + place.name + " coordinates=" + place.geometry.location.toUrlValue(6) + ", latitude=" + place.geometry.location.lat() + ", longitude=" + place.geometry.location.lng());

            // Set Location to new Event Object
            new_event.ort.name = place.name;
            new_event.ort.latitude = place.geometry.location.lat();
            new_event.ort.longitude = place.geometry.location.lng()

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        }); // END MAPS EVENTLISTENER-FUNCTION
      }
      window.initAutocomplete = initAutocomplete;
    } // END IF ELSE


  }, // END MOUNTED

  // END MOUNTED
  data() {
    return {
      new_event
    }
  }

}
</script>
  