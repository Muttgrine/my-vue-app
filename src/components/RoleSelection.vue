<template>
    <div class="role-selection">
        <button @click="goBack" class="back-button">Back to Main</button>
      <img src="@/assets/pa-alerts-logo.png" alt="PA Alerts Logo" class="logo"/>
      <button @click="selectRole('teacher')" class="role-button">Teacher</button>
      <button @click="selectRole('parent')" class="role-button">Parent</button>
      <button @click="selectRole('student')" class="role-button">Student</button>
    </div>
  </template>
  
  <script>
export default {
  methods: {
    selectRole(role) {
      if (role === 'teacher') {
        this.$router.push('/teacher-registration');
      } else if (role === 'parent') {
        this.$router.push('/parent-registration');
      } else if (role === 'student') {
        this.$router.push('/student-registration');
      }
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>
  
  <style scoped>
  .role-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .logo {
    max-width: 200px;
    margin-bottom: 20px;
  }
  
  .role-button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    background-color: #ff4d4f; /* Shade of red */
    color: white;
  }

  .back-button {
    background-color: #ccc; /* Lighter color for back button */
    color: #333;
    padding: 10px 20px;
    margin-bottom: 15px; /* Add some space above the button */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #bbb;
  }
  
  </style>
  