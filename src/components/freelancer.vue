<template>
  <div class="service-card">
    <div class="header">
      <h3>{{ service.service_name }}</h3>
      <p class="username">{{ service.username }}</p>
    </div>
    <div class="details">
      <p>Hourly Rate: {{ service.hourly_rate }}</p>
      <p>Email: {{ service.email }}</p>
      <p>Mobile No: {{ service.mobile }}</p>
      <p>Portfolio: <a :href="service.portfolio" target="_blank">{{ service.portfolio }}</a></p>
    </div>
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
.service-card {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: transform 0.2s;
}

.service-card:hover {
  transform: scale(1.03);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}

.username {
  color: #007bff; /* Blue color for the username */
}

.details {
  margin-top: 10px;
}

p {
  margin: 5px 0;
}

a {
  color: #007bff; /* Blue color for links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
