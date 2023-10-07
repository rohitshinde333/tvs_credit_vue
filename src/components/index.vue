<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="centered-text">
          <span class="letter" style="color: #000090; font-weight: bold; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">T</span>
          <span class="letter" style="color: #000090; font-weight: bold; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">V</span>
          <span class="letter" style="color: #000090; font-weight: bold; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">S</span> 
          <span class="space"></span>
          <span class="letter" style="color: #029000;">C</span>
          <span class="letter" style="color: #029000;">R</span>
          <span class="letter" style="color: #029000;">E</span>
          <span class="letter" style="color: #029000;">D</span>
          <span class="letter" style="color: #029000;">I</span>
          <span class="letter" style="color: #029000;">T</span>
        </h1>
        
        
        <button @click="exploreServices" class="btn btn-primary">Explore Services</button>
      </div>
    </section>

    
    
    <!-- Services Section -->
    <section class="services" ref="servicesSection" v-show="showServiceSection">
      <div class="container">
        <div class="card-grid">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="card"
          >
            <img :src="service.icon" :alt="service.title" />
            <h3>{{ service.title }}</h3>
            <p style="color: #FF0000;">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    

   
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      
      services: [
        {
          title: 'Two Wheeler Loan',
          icon: require('../../public/images/two_wheeler.png'),
        },
        {
          title: 'Used Car Loan',
          icon: require('../../public/images/four_wheeler.png'),
        },
        {
          title: 'Tractor Loan',
          icon: require('../../public/images/tractor.png'),
        },
        {
          title: 'Mobile/Consumer Durable Loan',
          icon: require('../../public/images/mobile.png'),
        },
        {
          title: 'Online Personal Loan',
          icon: require('../../public/images/personal.png'),
        },
        {
          title: 'INSTACARD',
          icon: require('../../public/images/card.png'),
        },
        {
          title: 'Used Commercial Vehicle Loan',
          icon: require('../../public/images/comercial_vehicle.png'),
        },
        {
          title: 'Buisiness And Corporate Loans',
          icon: require('../../public/images/business.png'),
        },
        {
          title: 'Three Wheeler Loans ',
          icon: require('../../public/images/three_wheeler.png'),
        },
        
      ],
      showServiceSection: false,
      loanAmount: null,
      interestRate: null,
      tenure: null,
      emi: null,
      
      
    };
  },
  methods: {
    exploreServices() {
      this.showServiceSection = !this.showServiceSection;
      // Get a reference to the services section
      setTimeout(() => {
        // Get a reference to the services section
        const servicesSection = this.$refs.servicesSection;

        // Scroll to the services section with a smooth animation
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    },
    
  },
};
</script>

<style>
/* Hero Section Styles */
.hero {
 
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

.centered-text {
  text-align: center;
}

.letter {
  display: inline-block;
  font-size: 100px;
  margin-right: 5px; 
  font-style: italic;
}

.space {
  display: inline-block;
  width: 20px; /* Adjust the width as needed for spacing */
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

.services .card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; 
}

.services .card {
  width: 100%; /* Each card takes up 100% of its grid cell width */
  max-width: none; /* Remove the maximum width constraint */
  height: auto; /* Allow the height to adjust based on content */
  transition: transform 0.2s, box-shadow 0.2s;
}


.services h2 {
  text-align: center;
  margin-bottom: 40px;
}

.services .card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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


</style>
