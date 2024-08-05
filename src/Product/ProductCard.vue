<template>
    <div class="product-card" @click="handleClick" role="button" tabindex="0">
      <img :src="product.image" :alt="product.title" />
      <h2>{{ product.title }}</h2>
      <div class="rating">
        <Ratings :rating="product.rating" :count="5" />
      </div>
      <p class="product-price">${{ product.price }}</p>
      <p class="product-category">{{ product.category }}</p>
      <button class="add-to-cart">Add to Cart</button>
      <button class="favorites-btn" aria-label="Add to favorites">
        
      </button>
    </div>
  </template>
  
  <script>
  import Ratings from '../components/Rating.vue';
  
  export default {
    components: {
      Ratings
    },
    props: {
      product: {
        type: Object,
        default: () => ({
          id: '',
          title: '',
          image: '',
          price: 0,
          rating: 0,
          category: ''
        })
      }
    },
    methods: {
      handleClick() {
        this.$emit('navigate', { id: this.product.id });
      }
    }
  };
  </script>
  