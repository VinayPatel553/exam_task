<template>
  <div class="container">
    <h3 class="text-center mt-3 mb-3">Admin Registration</h3>
    <form class="text-center mt-3 mb-3">
      <div class="form-group">
          <input type="text" class="mt-2 mb-2" placeholder="Enter Name" v-model="name">
        </div>
        <div class="form-group">
          <input type="email" class="mt-2 mb-2" placeholder="Enter Email" v-model="email">
        </div>
        <div class="form-group">
          <input type="password" class="mt-2 mb-2" placeholder="Enter Password" v-model="password">
        </div>
        <div class="form-group mt-2 mb-2">
          <button class="btn btn-primary" @click="handleAdmin">Submit</button>
        </div>
      <div class="form-group mt-2 mb-2">
        <router-link to="/user">User Registration</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

export default {
  name: 'AdminRegister',
  methods: {
    ...mapActions('admin', ['registerAdmin']),
    handleAdmin() {
      if (!this.name || !this.email || !this.password) {
        alert('Please fill all details');
        return;
      }
      this.registerAdmin({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(() => {
        // Redirect to home page after successful registration
        this.$router.push('/home');
      });


    }
  }
}
</script>

<style scoped></style>