<template>
    <div class="home">
      <!-- Hero Section -->
      <section >
        <div >
          <h1>Welcome to Our Services Platform</h1>
          <p>Find the best freelancers, maintenance services, and Vastu Shastra experts.</p>
        </div>
      </section>
  
      <!-- Services Section -->
      <section>
      <div>
        <h2>Our Services</h2>
        <vue-carousel :per-page="3" :navigation-enabled="true" :autoplay="true">
          <vue-carousel-slide v-for="(service, index) in services" :key="index">
            <div class="card">
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
  
      <!-- Footer Component -->
      <footer></footer>
    </div>
  </template>
  
  <script>
  
  import VueCarousel from 'vue-carousel';

  export default {
    data() {
      return {
        components: {
  VueCarousel,
},
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
    methods: {
      exploreServices() {
        // Implement navigation to the services page or route as needed
      },
    },
  };
  </script>
  
 <style>
.card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s;
  }
  .card img {
    max-width: 300px;
    margin-left: 45ch;
  }
  .card:hover {
    transform: scale(1.05);
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  
  p {
    margin: 5px 0;
  }
</style>
  