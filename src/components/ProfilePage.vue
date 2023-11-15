<template>
    <div class="profile-page">
        <!-- Profile Container -->
        <div class="profile-container">
            <h2>User Profile</h2>
            <div v-if="user" class="user-info">
                <!-- Profile picture container -->
                <div class="profile-picture-container">
                    <img src="@/assets/user.png" alt="Profile Picture" class="profile-picture">
                </div>
                <p><strong>Full Name:</strong> {{ user.fullName }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
            </div>
            <!-- Additional profile details and inputs can go here -->
            <div class="container rounded bg-white mt-5 mb-5">
                <!-- Profile details -->
            </div>
        </div>

        <!-- Button Container -->
        <div class="button-container">
            <button @click="goBack" class="back-button">Back to Home</button>
            <button @click="showSettings = true" class="settings-button">Settings</button>
            <button @click="goToLocationTracker" class="profile-button">Location Tracker</button>
            <div v-if="showSettings" class="settings-container">
                <h3>Settings</h3>
                <div class="toggle-container">
                    <label for="gpsToggle">Enable GPS:</label>
                    <input type="checkbox" id="gpsToggle" v-model="gpsEnabled">
                </div>
                <button @click="updateSettings">Save Settings</button>
            </div>
        </div>
    </div>
</template>

  
<script>
export default {
  data() {
    return {
      user: null, // This will hold the user data
      showSettings: false, // Controls the display of settings form
      gpsEnabled: false, // Stores the GPS toggle state
    };
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    updateSettings() {
      console.log('Settings updated', this.gpsEnabled);
      this.showSettings = false;
    },
    goToLocationTracker() {
      // Add this method to handle navigation to LocationTracker.vue
      this.$router.push('/location-tracker'); // Adjust this path based on your router configuration
    },
  },
  mounted() {
    // Fetch user data
    this.user = { fullName: 'John Doe', email: 'john@example.com' };
  }
};
</script>


<style scoped>
.profile-page {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .profile-container {
    margin-bottom: 20px; /* Spacing between profile and button containers */
  }
  .profile-picture-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #ff4d4f;
    object-fit: cover;
  }
  
  .user-info {
    text-align: center; /* Center user info text */
    color: #333; /* Dark grey for text */
    font-size: 16px; /* Adjust font size as needed */
    margin-bottom: 20px; /* Spacing below user info */
  }

.settings-container, .profile-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-control, .form-control:focus {
  border-color: #ff4d4f;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center buttons vertically and horizontally */
    margin-top: 20px; /* Spacing above the button container */
  }

  .back-button, .settings-button {
    margin-bottom: 10px; /* Spacing below each button */
    /* Other styles for buttons remain the same */
  }
.profile-button, .settings-button {
  background-color: rgb(99, 39, 120);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile-button:hover, .settings-button:hover {
  background-color: #682773; /* A slightly darker shade for hover effect */
}


.back-button {
  background-color: #ff4d4f; /* Red color from your palette */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.back-button:hover {
  background-color: #e63946; /* A slightly darker red for hover effect */
}

.labels {
  color: #333; /* Dark grey for readability */
  font-size: 14px;
  margin-bottom: 5px;
}

/* Style for other elements like input fields, labels etc. */
</style>