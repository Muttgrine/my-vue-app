<template>
    <div>
      <h2>Login or Sign Up</h2>
      <router-link to="/signup/student">Student</router-link>
      <router-link to="/signup/parent">Parent</router-link>
      <router-link to="/signup/teacher">Teacher</router-link>
    </div>
  </template>
  
  <script>
  export default {
    // Component logic goes here
  };
  </script>



<style scoped>
  h2 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
  }

  router-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    border: 2px solid #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    transition: background-color 0.3s, color 0.3s;
  }

  router-link:hover {
    background-color: #007bff;
    color: white;
  }
</style>