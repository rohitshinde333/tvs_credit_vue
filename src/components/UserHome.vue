<template>
  <div>
    <div >
      <h1>Welcome to the Home Page</h1>
      <p v-if="isAuthenticated">Logged in as: {{ username }}</p>
      <p v-else>Please log in to see your username.</p>
      <button v-if="isAuthenticated" @click="deleteMyAccount" class="btn btn-danger">Delete My Account</button> |
      <button v-if="isAuthenticated" @click="updateProfile" class="btn btn-warning">Update Profile</button>
      <br>
      <form v-if="editingProfile" @submit="submitProfile">
        <div>Edit Profile</div>
        <div>
          <label for="phone">Phone:</label>
          <input type="text" v-model="editingProfile.phone" id="phone">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="editingProfile.email" id="email">
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" v-model="editingProfile.address" id="address">
        </div>

        <button type="submit" class="btn btn-success">Save</button>
        <button type="button" @click="cancelEditProfile" class="btn btn-danger">Cancel</button>
      </form>
      <br>
      <Modal :title="modalTitle" :message="modalMessage" :isOpen="showModal" @close="closeModal" />
    </div>
      <div>
        <label for="serviceType">Select Service Type:</label>
        <select v-model="selectedServiceType" id="serviceType">
          <option value="freelancer">Freelancer</option>
          <option value="home-maintenance">Home Maintenance</option>
          <option value="labor">Labor</option>
        </select>
      </div>
      <div>
        <label for="searchQuery">Search:</label>
        <input type="text" v-model="searchQuery" id="searchQuery" @input="performSearch">
      </div>
    
    
      <div v-for="result in queryResults" :key="result.id">
        <template v-if="selectedServiceType === 'freelancer'">
          <FreelancerCard :service="result" />
        </template>
        <template v-else-if="selectedServiceType === 'labor'">
          <LaborCard :service="result" />
        </template>
        <template v-else-if="selectedServiceType === 'home-maintenance'">
          <HomeMaintenanceCard :service="result" />
        </template>
        
      </div>
      <section>
      <div>
        <h2>Our Services</h2>
        <vue-carousel :per-page="3" :navigation-enabled="true" :autoplay="true">
          <vue-carousel-slide v-for="(service, index) in services" :key="index">
            <div class="service-card">
              <img :src="service.icon" :alt="service.title" />
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </vue-carousel-slide>
        </vue-carousel>
      </div>
    </section>
  
      <!-- New Category Launches Section -->
      <section>
        <div >
          <h2>New Category Launches</h2>
          <div  v-for="(category, index) in newCategories" :key="index">
            <img :src="category.image" :alt="category.title" />

            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
          </div>
        </div>
      </section>
  </div>
    
  
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import axios from 'axios';
import Modal from './Modal.vue';
import { useStore } from 'vuex';
import FreelancerCard from './freelancer.vue';
import LaborCard from './LaborCard.vue';
import HomeMaintenanceCard from './HomeMaintenanceCard.vue';

export default {
  components: {
    Modal,
    FreelancerCard,
    LaborCard,
    HomeMaintenanceCard,
  },
  data() {
    return {
      isAuthenticated: false,
      editingProfile: null,
      username: '',
      userId: 0,
      message: '',
      showModal: false,
      selectedServiceType: 'freelancer', // Initialize the selected service type
      queryResults: [],
      services: [
          {
            title: 'Freelancers',
            description: 'Hire talented freelancers for your projects.',
            icon: require("../assets/freelancerIcon.jpeg"),
          },
          {
            title: 'Maintenance',
            description: 'Get professional maintenance services.',
            icon: require("../assets/maintainaceIcon.jpeg"),

          },
          {
            title: 'Vastu Shastra',
            description: 'Consult experts for Vastu Shastra guidance.',
            icon: require("../assets/vastuShastraIcon.jpeg"),

          },
        ],
        newCategories: [
          {
            name: 'Hair Studio for Women',
            description: 'Explore our new hair studio services.',
            image: require("../assets/hairSaloon.png")
          },
          // Add more new category items as needed
        ],
    };
  },
  
  computed: {
    ...mapGetters(['accessToken']),
  },
  mounted() {
    this.fetchUsername();
  },
  methods: {
    ...mapActions(['clearAccessToken']),
    performSearch() {
      if (this.searchQuery === '') {
        this.searchResults = [];
        return;
      }

      // Make an API request to perform the search based on the selected service type
      const accessToken = this.accessToken;
      const serviceType = this.selectedServiceType;

      if (serviceType == "freelancer") {
        axios
        .get(`http://localhost:5000/search-freelancers?service_name=${this.searchQuery}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          })
          .then((response) => {
            this.queryResults = response.data;
          })
          .catch((error) => {
            console.error('Failed to perform search:', error);
          });
      }
      else if (serviceType == "labor") {
        axios
        .get(`http://localhost:5000/search-labor?service_name=${this.searchQuery}&location=${location}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          })
          .then((response) => {
            this.queryResults = response.data;
          })
          .catch((error) => {
            console.error('Failed to perform search:', error);
          });
      }
      else {
        axios
        .get(`http://localhost:5000/search-home-maintenance?service_name=${this.searchQuery}&location=${location}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          })
          .then((response) => {
            this.queryResults = response.data;

          })
          .catch((error) => {
            console.error('Failed to perform search:', error);
          });
      }
    },
  
    deleteMyAccount() {
      axios
        .delete('http://localhost:5000/users', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .then((response) => {
          // Handle account deletion response...
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
    fetchUsername() {
      const store = useStore();
      const accessToken = store.getters.accessToken;
      axios
        .get('http://localhost:5000/protected', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // Handle the response from the protected resource
          this.isAuthenticated = true;
          this.message = response.data.message;
          this.username = response.data.name;
          this.userId = response.data.id;
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    },
    
    logout() {
      // Clear the access token from the store and perform any other necessary logout actions
      this.clearAccessToken();
      // Redirect the user to the login page or any other desired page
      this.$router.push('/');
    },
    
    updateProfile(event) {
      event.preventDefault();
      this.editingProfile = {
        phone: '',
        email: '', 
        address: '',
      };
    },
    
    cancelEditProfile() {
      this.editingProfile = null;
    },
    
    submitProfile(event) {
      event.preventDefault();
      const accessToken = this.accessToken;
      const userId = this.userId;
      axios
        .put(`http://localhost:5000/users/${userId}`, this.editingProfile, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // Handling the successful profile update
          this.showModal = true;
          this.modalTitle = 'Success';
          this.modalMessage = 'Profile updated successfully';

          // Reseting the editingProfile and fetch the updated profile data
          this.editingProfile = null;
          this.fetchUsername();
        })
        .catch((error) => {
          // Handling the profile update error
          console.error('Failed to update profile:', error);
        });
    },
    
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>



<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #e8b76d;
}
</style>