<template>
    <div class="flex justify-center">
      <Error v-if="error" :message="error.message" />
      <ProductSkeleton v-if="loading && !error" />
      <ProductDetail v-else-if="!loading && !error" v-bind="product" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import ProductDetail from '../components/Product/ProductDetail.vue';
  import ProductSkeleton from '../components/Product/ProductSkeleton.vue';
  import Error from '../components/Error.vue';
  import { fetchSingleProduct } from '../api/api';
  
  const route = useRoute();
  const id = route.params.id;
  
  const product = ref({});
  const error = ref(null);
  const loading = ref(false);
  
  onMounted(async () => {
    loading.value = true;
    const { response, error: fetchError } = await fetchSingleProduct(id);
    if (fetchError) {
      error.value = fetchError;
    } else {
      product.value = response;
    }
    loading.value = false;
  });
  </script>
  
  <style scoped>
  /* Add styles here */
  </style>
  