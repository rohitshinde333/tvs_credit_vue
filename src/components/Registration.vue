<template>
  <div class="registration-container">
    <h1>Registration</h1>
    <form class="registration-form" @submit.prevent="register">
      <div class="form-group">
        <label for="serviceType">Select Service Type:</label>
        <select v-model="selectedServiceType" id="serviceType">
          <option value="freelancer">Freelancer</option>
          <option value="home-maintenance">Home Maintenance</option>
          <option value="labor">Labor</option>
        </select>
      </div>

      <!-- Additional fields based on service type -->
      <div v-if="selectedServiceType === 'freelancer'" class="additional-fields">
        <h3>Freelancer Details</h3>
        <div class="form-group">
          <label for="hourlyRate">Hourly Rate:</label>
          <input type="number" v-model="freelancerData.hourlyRate" id="hourlyRate">
        </div>
        <div class="form-group">
          <label for="skills">Skills:</label>
          <input type="text" v-model="freelancerData.skills" id="skills">
        </div>
        <div class="form-group">
          <label for="portfolio">Portfolio:</label>
          <input type="text" v-model="freelancerData.portfolio" id="portfolio">
        </div>
      </div>

      <div v-if="selectedServiceType === 'home-maintenance'" class="additional-fields">
          <label for="skills">Skills:</label>
          <input type="text" v-model="homeMaintenanceData.skills" id="skills">
          <label for="availability">Availability:</label>
          <input type="text" v-model="homeMaintenanceData.availability" id="availability">
          <label for="serviceAreas">Service Areas:</label>
          <input type="text" v-model="homeMaintenanceData.serviceAreas" id="serviceAreas">
          <label for="certifications">Certifications:</label>
          <input type="text" v-model="homeMaintenanceData.certifications" id="certifications">
        </div>
  
        <div v-if="selectedServiceType === 'labor'" class="additional-fields">
          <label for="physicalCapabilities">Physical Capabilities:</label>
          <input type="text" v-model="laborData.physicalCapabilities" id="physicalCapabilities">
          <label for="hourlyRate">Hourly Rate:</label>
          <input type="number" v-model="laborData.hourlyRate" id="hourlyRate">
          <label for="availability">Availability:</label>
          <input type="text" v-model="laborData.availability" id="availability">
          <label for="serviceAreas">Service Areas:</label>
          <input type="text" v-model="laborData.serviceAreas" id="serviceAreas">
        </div>

      <button type="submit" class="register-button">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedServiceType: 'freelancer',
      freelancerData: {
        hourlyRate: 0,
        skills: '',
        portfolio: '',
      },
      // Define data objects for 'home-maintenance' and 'labor' here
    };
  },
  computed: {
    ...mapGetters(['accessToken']),
  },
  methods: {
    register() {
      // Handle registration logic based on the selected service type
      // You can keep your existing logic here
    },
  },
};
</script>

<style scoped>
.registration-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.registration-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-button:hover {
  background-color: #0056b3;
}
</style>
