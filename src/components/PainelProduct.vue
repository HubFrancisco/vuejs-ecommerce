<template>
  <div class="card p-2">
    <div v-if="loading">
      <PainelCategory
        @handleFilterProduct="handleFilterProduct"
        v-if="categories !== null"
        :items="categories"
      />
      <Carousel
        :value="handleFilterProducts"
        :numVisible="4"
        :nextButtonProps="{ severity: 'secondary' }"
        :prevButtonProps="{ severity: 'secondary' }"
        :showIndicators="false"
      >
        <template #item="slotProps">
          <CardProduct :items="slotProps" />
        </template>
      </Carousel>
    </div>
    <div v-else class="card flex justify-center items-center">
      <ProgressSpinner
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="transparent"
        animationDuration="1.5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
  </div>
</template>
<script setup>
import { Carousel, ProgressSpinner } from "primevue";
import { computed, onMounted, ref } from "vue";
import CardProduct from "./CardProduct.vue";
import PainelCategory from "./PainelCategory.vue";
// const responsiveOptions = [
//     {
//         breakpoint: '1400px',
//         numVisible: 4,
//         numScroll: 1
//     },
//     {
//         breakpoint: '1199px',
//         numVisible: 3,
//         numScroll: 1
//     },
//     {
//         breakpoint: '767px',
//         numVisible: 2,
//         numScroll: 1
//     },
//     {
//         breakpoint: '575px',
//         numVisible: 1,
//         numScroll: 1
//     }
// ];
const products = ref([]);
const categories = ref([]);
const selectedCategory = ref("");
const loading = ref(false);
onMounted(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      products.value = data.products;
      products.value?.map((product) => {
        if (categories.value == null) {
          categories.value.push({
            label: product.category,
            url: product.category,
          });
        } else if (
          categories.value.find(
            (category) => category.label == product.category
          ) == undefined
        ) {
          categories.value.push({
            label: product.category,
            url: product.category,
          });
        }
      });
      loading.value = true;
    });
});
function handleFilterProduct(category) {
  loading.value = false;
  setTimeout(() => {
    selectedCategory.value = category;
    loading.value = true;
  }, 800);
}
const handleFilterProducts = computed(() =>
  products.value.filter(
    (product) =>
      product?.category.includes(selectedCategory.value) ||
      selectedCategory.value == "All"
  )
);
</script>
