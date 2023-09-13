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
          <label for="hourlyRate">Hourly Rate:</label>
          <input type="number" v-model="freelancerData.hourlyRate" id="hourlyRate">
          <label for="skills">Skills:</label>
          <input type="text" v-model="freelancerData.skills" id="skills">
          <label for="portfolio">Portfolio:</label>
          <input type="text" v-model="freelancerData.portfolio" id="portfolio">
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
        homeMaintenanceData: {
          skills: '',
          availability: '',
          serviceAreas: '',
          certifications: '',
        },
        laborData: {
          physicalCapabilities: '',
          hourlyRate: 0,
          availability: '',
        },
      };
    },
    computed: {
        ...mapGetters(['accessToken']),
    },
    methods: {
      register() {
        const service_type = this.selectedServiceType;
        if (service_type == "freelancer"){
            axios
            .post('http://localhost:5000/freelancer_services', this.freelancerData,{
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            })
            .then((response) => {
                alert('Registration successful!');
                // Redirect to login page or perform any other action
            })
            .catch((error) => {
                console.error('Registration failed:', error);
                // Handle registration error
            });
        }
        else if(service_type == "home-maintenance"){
            axios
            .post('http://localhost:5000/home-maintenance-services', this.homeMaintenanceData,{
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            })
            .then((response) => {
                alert('Registration successful!');
                // Redirect to login page or perform any other action
            })
            .catch((error) => {
                console.error('Registration failed:', error);
                // Handle registration error
            });
        }
        else {
            axios
            .post('http://localhost:5000/labor_services', this.laborData,{
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            })
            .then((response) => {
                alert('Registration successful!');
                // Redirect to login page or perform any other action
            })
            .catch((error) => {
                console.error('Registration failed:', error);
                // Handle registration error
            });
        }
  
        
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your CSS styles here */
  </style>
  