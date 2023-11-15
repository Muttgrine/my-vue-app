<template>
  <div class="splash-screen">
    <img :src="require('@/assets/pa-alerts-logo.png')" alt="PA Alerts Logo" class="logo"/>

    <button @click="navigateToRoleSelection" class="button">Login</button>
    <button @click="navigateToRoleSelection" class="button">Sign Up</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoPath: require('@/assets/pa-alerts-logo.png') // Updated file name
    };
  },
  methods: {
    navigateToRoleSelection() {
  console.log('Button clicked, navigating to RoleSelection');
  this.$router.push('/select-role');
}

  }
}
</script>



<style scoped>
.splash-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff; /* White background */
}

.logo {
  max-width: 200px; /* Adjust as needed */
  margin-bottom: 20px;
}

.button {
  padding: 10px 20px;
  background-color: #ff4d4f; /* Shade of red */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #ff7875; /* Lighter shade of red for hover effect */
}
</style>