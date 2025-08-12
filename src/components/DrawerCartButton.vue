<template>
    <button class="cursor-pointer" @click="visibleRight = true">
        <slot></slot>
    </button>
    <Drawer v-model:visible="visibleRight" position="right">
        <template #header>
            <div>
              <h2 class="font-bold">My Cart</h2>
              <h2>Item{{ cart.length > 1 ? 's' : '' }}: {{ cart.length }}</h2>
              <h2>Total: ${{cartTotal > 0 ? cartTotal.toFixed(2):0}}</h2>
            </div>
        </template>
        <div class="card">
            <DataView :value="cart">
                <template #list="slotProps">
                    <div class="flex flex-col">
                        <div v-for="(item, index) in slotProps.items" :key="index">
                            <div class="flex flex-col sm:flex-row sm:items-center p-2 gap-2 "
                                :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                <div class="relative">
                                    <img class="block xl:block  mx-auto rounded w-[80px] h-[80px]" :src="item.thumbnail"
                                        :alt="item.title" />
                                </div>
                                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div class="w-full gap-2">
                                        <div class="w-full">
                                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                                item.category }}</span>
                                            <div class="text-sm mt-2">{{ item.title }}</div>
                                            <div class="flex  w-full md:items-end gap-2">
                                                <div class="w-full flex gap-2 pt-1 justify-between items-center">
                                                    <div class="flex flex-col">
                                                        <span class="text-sm font-semibold">${{ item.price }} x {{ item.quantity }}</span>
                                                        <span class="text-sm font-semibold">${{ item.total > 0 ? item.total.toFixed(2):0 }}</span>
                                                    </div>
                                                    <span>
                                                        <Button @click="takeCart(item)" 
                                                        severity="danger" 
                                                        icon="pi pi-minus-circle" 
                                                        class="mr-1" />
                                                        <Button @click="removeFromCart(item)" 
                                                        severity="danger" 
                                                        icon="pi pi-trash" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </div>
    </Drawer>
</template>
<script setup>
import { Button, DataView, Drawer } from 'primevue';
import { inject, ref } from 'vue';
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
const {cart,cartTotal,takeCart,removeFromCart} = inject("cart");
console.log(cartTotal);
const visibleRight = ref(false);
</script>