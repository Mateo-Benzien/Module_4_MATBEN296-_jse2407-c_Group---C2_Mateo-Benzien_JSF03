<script>
  export let id;
  export let title;
  export let description;
  export let image;
  export let price;
  export let rating;
  export let category;
</script>

<div class="product-detail">
  <h1>{title}</h1>
  <img src={image} alt={title} />
  <p>{description}</p>
  <p>Price: ${price.toFixed(2)}</p>
  <p>Category: {category}</p>
  <p>Rating: {rating} / 5</p>
</div>
