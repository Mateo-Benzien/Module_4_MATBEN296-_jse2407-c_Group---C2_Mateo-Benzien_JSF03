<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductDetail from '../components/Product/ProductDetail.vue';
import ProductSkeleton from '../components/Product/ProductSkeleton.vue';
import Error from '../components/Error.vue';

export default {
  components: {
    ProductDetail,
    ProductSkeleton,
    Error,
  },
  setup() {
    const route = useRoute();
    const product = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        product.value = await response.json();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    });

    return {
      product,
      loading,
      error,
    };
  },
};
</script>

<template>
  <div>
    <Error v-if="error" :message="error" />
    <ProductSkeleton v-else-if="loading" />
    <ProductDetail v-else :product="product" />
  </div>
</template>

<style scoped>
/* Add styles here */
</style>
