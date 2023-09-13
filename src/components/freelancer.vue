<template>
    <div class="card">
      <h3>{{ service.service_name }}</h3>
      <p>{{ service.username }}</p>
      <p>Hourly Rate: {{ service.hourly_rate }}</p>
      <p>Email: {{ service.email}}</p>
      <p>Mobile No:{{ service.mobile}}</p>
      <p>Portfolio: {{ service.portfolio}}</p>
    </div>
  </template>
  

  
  
  <script>
  export default {
    props: {
      service: Object, // The data for the freelancer service
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s;
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
  
  /* Add more specific styles as needed */
  </style>
  