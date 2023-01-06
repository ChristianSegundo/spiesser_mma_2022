<template>
 <div class="mapwrapper">
   

  <input v-if="!vorschau"
      id="pac-input"
      class="controls"
      type="text"
      placeholder="Wo findet dein Event statt?"
  />

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

    mounted(){
        

      if (this.vorschau == true){
      
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

      else{

        let eventMap = document.createElement('script')
        eventMap.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initAutocomplete&libraries=places&v=weekly')
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
    data(){
    return{
      new_event
    }
  }
    
  }
  </script>
  
  <style >
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/* 
 * Always set the map height explicitly to define the size of the div element
 * that contains the map. 
 */
 #map {
  width: 100%;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.25);

}

/* 
 * Optional: Makes the sample page fill the window. 
 */
#description {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
}

#infowindow-content .title {
  font-weight: bold;
}

#infowindow-content {
  display: none;
}

#map #infowindow-content {
  display: inline;
}

.pac-card {
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  padding: 0 0.5em;
  font: 400 18px Roboto, Arial, sans-serif;
  overflow: hidden;
  font-family: Roboto;
  padding: 0;
}

#pac-container {
  padding-bottom: 12px;
  margin-right: 12px;
}

.pac-controls {
  display: inline-block;
  padding: 5px 11px;
}

.pac-controls label {
  font-family: Roboto;
  font-size: 13px;
  font-weight: 300;
}

#pac-input {
  background-color: #fff;
  font-size: 15px;
  font-weight: 300;
  text-overflow: ellipsis;
  width: 340px;
}

#pac-input:focus {
  border-color: #4d90fe;
}

#title {
  color: #fff;
  background-color: #4d90fe;
  font-size: 25px;
  font-weight: 500;
  padding: 6px 12px;
}

#target {
  width: 345px;
}
.mapwrapper {
    width: 340px;
    padding: 20px 0;

}
.mapwrapper input { 
    width: 340px;
    margin: 15px 0;
}
.gmnoprint {
  display: none !important;
}


  </style>
  