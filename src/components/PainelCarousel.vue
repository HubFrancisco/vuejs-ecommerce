
<template>
    <Carousel  :value="galleries" :showNavigators="false"  :numVisible="3"  :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <img :src="slotProps.data.image" 
            :alt="slotProps.data.title" 
            class="w-full object-cover h-[280px]" />
        </template>
    </Carousel>
</template>
<script setup>
import { Carousel } from 'primevue';
import { ref } from "vue";

const galleries = ref([
    { title: 'New York', image: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg' },
    { title: 'Paris', image: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg' },
    { title: 'Tokyo', image: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg' },
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
]);
</script>
