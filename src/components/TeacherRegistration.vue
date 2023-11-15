<template>
    <div>
        <div class="form-container">
            <div class="registration-form">
        <button @click="goBack" class="back-button">Back</button>
      <h2>Teacher Registration</h2>
      <form @submit.prevent="submitForm">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" v-model="formData.fullName" required>
  
        <label for="studentName">Student's Name</label>
        <input type="text" id="studentName" v-model="formData.studentName" required>
  
        <label for="schoolEmployment">School of Employment</label>
        <input type="text" id="schoolEmployment" v-model="formData.schoolEmployment" required>
  
        <label for="employeeId">Employee ID number</label>
        <input type="text" id="employeeId" v-model="formData.employeeId" required>
  
        <label for="studentId">Student's ID Number</label>
        <input type="text" id="studentId" v-model="formData.studentId" required>
  
        <label for="gender">Gender</label>
        <select id="gender" v-model="formData.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
  
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" required>
  
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" v-model="formData.dob" required>
  
        <label for="address">Address</label>
        <textarea id="address" v-model="formData.address" required></textarea>
  
        <label for="contactNumber">Contact number</label>
        <input type="text" id="contactNumber" v-model="formData.contactNumber" required>
  
        <button type="submit">Sign Up</button>
      </form>
    </div>
</div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          fullName: '',
          studentName: '',
          schoolEmployment: '',
          employeeId: '',
          studentId: '',
          gender: 'Male',
          email: '',
          dob: '',
          address: '',
          contactNumber: ''
        }
      };
    },
    methods: {
    submitForm() {
      // Handle form submission
      console.log("Parent Registration Data:", this.formData);
      // You can add logic to send data to server here
    },
    goBack() {
      this.$router.push('/select-role');
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.registration-form {
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h2 {
  color: #ff4d4f;
  text-align: center;
  margin-bottom: 20px;
}

label {
  display: block;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="date"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

select {
  background-color: #fff;
}

.back-button,
.submit-button {
  display: inline-block;
  background-color: #ff4d4f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
  margin-top: 10px;
}

.back-button:hover,
.submit-button:hover {
  background-color: #e63946;
}

.back-button {
  background-color: #ccc;
  color: #333;
}

.back-button:hover {
  background-color: #bbb;
}

/* Responsive Styles */
@media (max-width: 600px) {
  .registration-form {
    width: 90%;
    padding: 15px;
  }

  h2 {
    font-size: 1.2em;
  }
}
</style>

