<template>
    <div>
      <p v-if="isLoading" class="loading-message">Loading...</p>
      <p v-else-if="fetchError" class="error-message">Error: {{ fetchError }}</p>
      <div v-else class="product-list-container">
        <div class="product-list">
          <ProductCard 
            v-for="product in productList" 
            :key="product.id" 
            :product="product" 
            @navigate="handleNavigate" 
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import ProductCard from './ProductCard.vue';
  import { useProductStore } from '../Store/productStore';
  
  export default {
    components: {
      ProductCard
    },
    setup() {
      const productStore = useProductStore();
      const productList = ref([]);
      const fetchError = ref('');
      const isLoading = ref(true);
  
      const unsubscribeProducts = productStore.products.subscribe(value => {
        productList.value = value;
      });
  
      const unsubscribeError = productStore.error.subscribe(err => {
        fetchError.value = err;
      });
  
      const unsubscribeLoading = productStore.loading.subscribe(load => {
        isLoading.value = load;
      });
  
      onMounted(() => {
        productStore.fetchProducts();
      });
  
      onUnmounted(() => {
        unsubscribeProducts();
        unsubscribeError();
        unsubscribeLoading();
      });
  
      const handleNavigate = (event) => {
        console.log('Navigate to product:', event.detail.id);
        // You might want to use a routing library to navigate to the product detail page
      };
  
      return {
        productList,
        fetchError,
        isLoading,
        handleNavigate
      };
    }
  };
  </script>