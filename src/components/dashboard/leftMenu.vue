<template>
  <div v-if="isAdmin===true">
      <AdminMenu />
  </div >
  <div v-else>
     <CustomerMenu />
  </div>
  
  </template>
  
  <script>
  import AdminMenu from './leftMenu/admin.vue'
  import CustomerMenu from './leftMenu/customer.vue'

  
  export default {
      name: "LeftMenu",
      methods: {
         isAdmin: false,
      },
      components: { AdminMenu ,CustomerMenu}
  };
  </script>
      
  <style scoped>

  </style>