<template>
    <div class="container text-center">
      <h3 class="text-center mt-4 mb-4">Your Products In Cart</h3>
      <div v-if="cartItems.length === 0" class="text-center mt-3">
        <h5>No Products to Display !</h5>
      </div>
      <div v-else>
        <table class="table border table-striped">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td><img :src="item.image" alt="Product Image" style="width: 80px; height: 80px;"></td>
              <td>{{ item.title }}</td>
              <td>Rs. {{ item.price }}</td>
              <td><button @click="removeItem(item)" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button></td>
            </tr>
          </tbody>
        </table>
        <div class="text-center mt-4 mb-4">
          <p class="fs-3 mt-2 b-2"> <span class="border border-primary-subtle p-2">Total Amount: <span class="fw-semibold">Rs. {{ totalAmount }}</span></span></p>
          <button @click="checkout" class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'CartComponent',
    computed: {
      ...mapState('cart', ['cartItems']),
      totalAmount() {
        const total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
        return total.toFixed(2); // Round to 2 decimal places
    }
    },
    methods: {
      ...mapActions('cart', ['removeFromCart']),
      removeItem(item) {
        this.removeFromCart(item.id);
      },
      checkout() {
        // Perform checkout action here
        alert('Your order has been placed successfully');
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  