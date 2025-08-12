<template>
 <div
            class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
          >
            <DialogProduct :items="items">
              <div class="mb-4 w-[200px]">
                <div class="relative mx-auto">
                  <img
                    :src="items.thumbnail"
                    :alt="items.name"
                    class="w-full rounded h-[180px]"
                  />
                </div>
              </div>
            </DialogProduct>
            <div class="mb-4 font-medium line-clamp-1">{{ items.title }}</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-semibold text-xl">
                ${{ items.price }} {{ getQuantityCart(items) > 0 ? `x ${getQuantityCart(items)}` : '' }}
              </div>
              <span>
                <Button v-if="getQuantityCart(items) != ''" 
                @click="takeCart(items)" 
                severity="danger" 
                icon="pi pi-minus-circle" 
                class="mr-2" />
                <Button
                  icon="pi pi-plus-circle"
                  @click="addToCart(items)"
                />
              </span>
            </div>
          </div>
</template>
<script setup>
import { Button } from 'primevue';
import { inject } from 'vue';
import DialogProduct from './DialogProduct.vue';
const {addToCart,takeCart,getQuantityCart} = inject("cart");
defineProps({ items: Object })
</script>