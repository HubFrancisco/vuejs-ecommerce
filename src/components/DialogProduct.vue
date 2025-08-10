
<template>
    <div class="card flex justify-center">
        <button  class="cursor-pointer"  @click="visible = true">
            <slot></slot>
        </button>
        <Dialog v-model:visible="visible" modal :header="items?.title" 
        :style="{ width: '50vw' }" 
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <h3><span class="text-bold  text-green-600">Category </span>{{ items?.category }}</h3>
            <p class="m-0">
                {{ items?.description }}
            </p>
            <div class="flex justify-between">
                <p>Price: {{ items?.price }}</p>
                <p>Rating: {{ items?.Rating}}</p>
                <p>Discount: {{ items?.discountPercentage}}</p>
                <p>Stock: {{ items?.stock}}</p>
            </div>
        </Dialog>
    </div>
</template>
<script setup>
import { Dialog } from "primevue";
import { ref } from "vue";
const props = defineProps({
    items: Object
})
const visible = ref(false);
</script>
