<template>
    <div class="location-tracker">
      <h2>Location Tracker</h2>
      <div class="map-container">
        <div ref="map" class="map"></div>
      </div>
      <div class="tracking-history-container">
        <h3>Tracking History</h3>
        <ul class="tracking-history">
          <!-- Dummy tracking history entries -->
          <li>Location A - Timestamp</li>
          <li>Location B - Timestamp</li>
          <li>Location C - Timestamp</li>
          <!-- Add more dummy history entries as needed -->
        </ul>
      </div>
      <button @click="goBackToProfile" class="back-button">Back to Profile</button>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    data() {
      return {
        map: null,
        userMarker: null, // Marker for the user's current location
      };
    },
    mounted() {
      this.initMap();
      this.trackUserLocation(); // Start tracking user location
    },
    methods: {
      initMap() {
        this.map = L.map(this.$refs.map).setView([0, 0], 13); // Initial view with a closer zoom
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      },
      goBackToProfile() {
        // Navigate back to the ProfilePage route
        this.$router.push({ name: 'ProfilePage' });
      },
      trackUserLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            this.updateUserLocation(latitude, longitude);
          }, (error) => {
            console.error('Error getting location:', error);
          });
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      },
      updateUserLocation(lat, lng) {
  if (!this.userMarker) {
    this.userMarker = L.marker([lat, lng]).addTo(this.map);
    this.userMarker.bindPopup('Your current location').openPopup();
  } else {
    this.userMarker.setLatLng([lat, lng]);
  }
  this.map.setView([lat, lng], 13); // Center the map on the new location
},

    },
    beforeUnmount() {
      if (this.userMarker) {
        this.userMarker.remove();
      }
      this.map.remove();
    },
  };
  </script>
  
  <style scoped>
  .location-tracker {
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
  }
  
  .map-container {
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden; /* Ensures the map corners are also rounded */
  }
  
  .map {
    height: 400px;
    border: 2px solid #ff4d4f; /* A border color from your palette */
  }
  
  .tracking-history-container {
    background: #f2f2f2; /* Light background for the history section */
    padding: 15px;
    border-radius: 10px;
  }
  
  .tracking-history {
    list-style: none;
    padding: 0;
  }
  
  .tracking-history li {
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .back-button {
    display: inline-block;
    background-color: #ff4d4f; /* Red color from your palette */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 10px;
  }
  
  .back-button:hover {
    background-color: #e63946; /* Slightly lighter red on hover */
  }
  </style>
  