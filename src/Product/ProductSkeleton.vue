<script>
  import ProductCard from './ProductCard.svelte';
  import ProductSkeleton from './CardSkeleton.svelte'; // Import the skeleton loader
  import { products, loading } from '../Store/productStore'; 
  
  let items = [];
  
  // Reactive statement to update items when products change
  $: if (!loading) {
    items = $products;
  }
</script>

{#if $loading}
  <!-- Show skeleton loader when data is loading -->
  <div class="product-skeleton-container">
    {#each Array(10).fill(null) as _}
      <ProductSkeleton />
    {/each}
  </div>
{:else}
  <!-- Show products when data is loaded -->
  <div class="product-list-container">
    {#each items as product (product.id)}
      <ProductCard
        {product.id}
        {product.title}
        {product.image}
        {product.price}
        {product.rating}
        {product.category}
      />
    {/each}
  </div>
{/if}
