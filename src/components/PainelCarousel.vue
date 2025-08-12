
<template>
    <Carousel  :value="galleries" :showNavigators="false"  :numVisible="3"  :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <img :src="slotProps.data.image" 
            :alt="slotProps.data.title" 
            class="w-full object-cover h-[400px]" />
        </template>
    </Carousel>
</template>
<script setup>
import { Carousel } from 'primevue';
import { ref } from "vue";

const galleries = ref([
    { title: 'New York', image: 'https://blog.winglabs.com.br/wp-content/uploads/2023/02/ecommerce-950x500.png?x90624' },
    { title: 'Paris', image: 'https://mindage.com.br/wp-content/uploads/2023/03/regras-e-commerce.jpg' },
    { title: 'Tokyo', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg' },
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
]);
</script>
