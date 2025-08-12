<template>
  <div class="card p-2 ">
    <div v-if="loading" class="pt-[75px]">
        <div v-for="data in products">
            <h2 class="text-center uppercase text-bold text-emerald-500">{{ data.category }}</h2>
            <Carousel
                :value="data.items"
                :numVisible="4"
                :nextButtonProps="{ severity: 'secondary' }"
                :prevButtonProps="{ severity: 'secondary' }"
                :showIndicators="false"
            >
                <template #item="{data}">
                <CardProduct :items="data" />
                </template>
            </Carousel>
        </div>
    </div>
    <div v-else class="card flex justify-center items-center h-screen">
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
import { inject, onMounted, ref } from "vue";
import CardProduct from "./CardProduct.vue";
const {cart, addToCart, removeFromCart} = inject("cart");
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
const newProducts = ref([]);
const loading = ref(false);
onMounted(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      products.value = handleOrderCategoryProduct(data.products);
      loading.value = true;
      console.log(products.value);
    });
});

function handleOrderCategoryProduct(data) {
    data.map(element => {
        if(newProducts.value.length === 0 || !newProducts.value?.find(item => item.category == element.category)){
            newProducts.value.push({
                category: element.category,
                items:[{...element}]
            })
        }else if(newProducts.value?.find(item => item.category == element.category)){
            newProducts.value?.find(item => item.category == element.category).items.push({...element})
        }
    })
    return newProducts.value
}
</script>
