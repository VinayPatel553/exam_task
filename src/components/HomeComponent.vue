<template>
  <div>
    <div class="container">
      <div class="d-flex mt-3 mb-3">
        <h2 class="text-center">Shop Wide Range Of Products</h2>
        <button class="btn btn-secondary ms-auto" @click="this.$router.push('/cart')">View Cart <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></button>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <div class="card-header">
              <img class="card-img-top" :src="product.image" alt="Product Image" style="height: 200px; object-fit: cover;">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ truncateDescription(product.description) }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <p class="mb-0 fs-5 fw-semibold">Rs. {{ product.price }}</p>
              <button @click="addToCartAction(product)" class="btn btn-primary">Add to Cart</button> <!-- Renamed method -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'HomePage',
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions('cart', ['addToCart']), 
    addToCartAction(product) { 
      this.addToCart(product);
    },
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    truncateDescription(description) {
      const words = description.split(' ');
      if (words.length > 10) {
        return words.slice(0, 25).join(' ') + '...';
      }
      return description;
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
