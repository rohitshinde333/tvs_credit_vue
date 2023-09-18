<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Our Services Platform</h1>
        <p>Find the best freelancers, maintenance services, and Vastu Shastra experts.</p>
        <button @click="exploreServices" class="btn btn-primary">Explore Services</button>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
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

    <!-- Additional Content Section -->
    <section class="additional-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Quality Services</li>
              <li>Experienced Professionals</li>
              <li>Wide Range of Categories</li>
              <li>Easy Booking and Hiring</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h2>Customer Testimonials</h2>
            <div class="testimonial">
              <p>"I found the perfect freelancer for my project. Highly recommended!"</p>
              <p class="author">- Jane Doe</p>
            </div>
            <div class="testimonial">
              <p>"The home maintenance service was outstanding. I'm a satisfied customer!"</p>
              <p class="author">- John Smith</p>
            </div>
          </div>
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
/* Hero Section Styles */
.hero {
  background-image: url('../assets/download.jpeg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

/* Explore Services Button */
.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* Services Section Styles */
.services {
  background-color: #f7f7f7;
  padding: 50px 0;
}

.services h2 {
  text-align: center;
  margin-bottom: 40px;
}

/* Additional Content Styles */
.additional-content {
  background-color: #fff;
  padding: 50px 0;
}

.additional-content h2 {
  text-align: center;
  margin-bottom: 40px;
}

.additional-content ul {
  list-style: none;
  padding-left: 0;
}

.additional-content ul li {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* Testimonial Styles */
.testimonial {
  margin-bottom: 20px;
}

.testimonial p {
  font-style: italic;
}

.testimonial .author {
  font-weight: bold;
}

/* Add more styles as needed */
</style>
