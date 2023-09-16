<template>
  <div >
    <div>
      <h1>Welcome, Admin!     </h1>
      <button v-if="isAuthenticated" @click="delete_my_account" class="btn btn-danger mt-3">Delete My Account</button>
      <br>
      <button v-if="isAuthenticated" @click="updateProfile()" class="btn btn-warning mt-3">Update Profile</button>

    <form v-if="editingProfile" @submit="submitProfile" class="add-movie-form">
      <div>Edit Profile</div>
      <div class="form-group">
        <label for="name">Phone:</label>
        <input type="text" v-model="editingProfile.phone" id="phone">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="editingProfile.email" id="email">
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" v-model="editingProfile.address" id="address">
      </div>

      <button type="submit" class="btn btn-success">Save</button>
      <button type="button" @click="cancelEditProfile" class="btn btn-danger">Cancel</button>
    </form>
    
    

    
    
    <Modal :title="modalTitle" :message="modalMessage" :isOpen="showModal" @close="closeModal" />
    </div>
  </div>
</template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import axios from 'axios';
  import { useStore } from 'vuex';
  export default {
    components: {
    
  },
    data() {
      return {
        downloadLink: '',
        taskComplete: false,
        isAuthenticated: false,
        showForm: false,
        
        showModal: false,
        editingProfile: null,
        userId: 0,
      }
    },
    mounted() {
      if (this.accessToken) {
        this.isAuthenticated = true;
        
        this.fetchUsername();
        
      }
    },
    computed: {
      ...mapGetters(['accessToken'])
    },
    methods: {
      ...mapActions(['clearAccessToken']),
      
 
      delete_my_account() {
        
        axios
          .delete('https://dockerfile-zijif7yiqa-el.a.run.app/users',{
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          })
          .then((response)=> {
            alert(response.data.message);
            this.$router.push('/');
          })
          .catch((error)=>{
            console.error(error);
          })
      },
     
      fetchUsername() {
      
      axios
        .get('https://dockerfile-zijif7yiqa-el.a.run.app/protected', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        .then((response) => {
          // Handle the response from the protected resource
          
          this.userId = response.data.id;
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    },
      updateProfile() {
      
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
        .put(`https://dockerfile-zijif7yiqa-el.a.run.app/users/${userId}`, this.editingProfile, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          // Handle the successful profile update
          this.showModal = true;
          this.modalTitle = 'Success';
          this.modalMessage = 'Profile updated successfully';

          // Reset the editingProfile and fetch the updated profile data
          this.editingProfile = null;
          this.fetchUsername();
        })
        .catch((error) => {
          // Handle the profile update error
          console.error('Failed to update profile:', error);
        });
    },
    closeModal() {
      this.showModal = false;
    },
    

    },
  };
  </script>

<style>
.add-movie-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 900px;
  margin: 0 auto;
}

.add-theatre-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 900px;
  margin: 0 auto;
}

.add-cast-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 900px;
  margin: 0 auto;
}

.form-group {
  margin: 10px 0;
  padding: 10px;
  width: 900px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  font-weight: bold;
}

.invalid-feedback {
  color: red;
  margin-top: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.table {
  border-collapse: collapse;
  width: 100%;
  border-color: #000000;
  
}
.th {
  background-color: rgb(224, 182, 126);
}
.td {
  border: 1px solid #000000;
  padding: 8px;
  text-align: left;
  background-color: #ffffff;
}


</style>