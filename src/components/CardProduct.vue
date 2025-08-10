<template>
 <div
            class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
          >
            <DialogProduct :items="items.data">
              <div class="mb-4 w-[200px]">
                <div class="relative mx-auto">
                  <img
                    :src="items.data.thumbnail"
                    :alt="items.data.name"
                    class="w-full rounded h-[180px]"
                  />
                </div>
              </div>
            </DialogProduct>
            <div class="mb-4 font-medium">{{ items.data.title }}</div>
            <div class="flex justify-between items-center">
              <div class="mt-0 font-semibold text-xl">
                ${{ items.data.price }}
              </div>
              <span>
                <Button
                  icon="pi pi-heart"
                  severity="secondary"
                  variant="outlined"
                />
                <Button icon="pi pi-shopping-cart" class="ml-2" />
              </span>
            </div>
          </div>
</template>
<script setup>
import { Button } from 'primevue';
import DialogProduct from './DialogProduct.vue';
defineProps({ items: Object })
</script>