<!-- src/views/LiveTracking.vue -->
<template>
    <div>
      <h2>Live Tracking</h2>
      <div ref="map" style="height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    data() {
      return {
        map: null,
        markers: [],
      };
    },
    mounted() {
      this.initMap();
      this.startTracking();
    },
    methods: {
      initMap() {
        this.map = L.map(this.$refs.map).setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      },
      startTracking() {
        // Example: Add markers for students (replace with actual data)
        const studentsData = [
          { id: 1, name: 'Student A', lat: 40, lng: -80 },
          { id: 2, name: 'Student B', lat: 45, lng: -90 },
        ];
  
        studentsData.forEach((student) => {
          const marker = L.marker([student.lat, student.lng]).addTo(this.map);
          marker.bindPopup(`<b>${student.name}</b>`).openPopup();
          this.markers.push(marker);
        });
      },
    },
    beforeDestroy() {
      this.markers.forEach((marker) => marker.remove());
      this.map.remove();
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific CSS goes here */
  </style>
  