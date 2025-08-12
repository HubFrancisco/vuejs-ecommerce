
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template  #item="{ item }">
            <button class="cursor-pointer" @click="$emit('handleFilterProduct', item.url)">
                <span :class="item.icon"></span>
                <span class="capitalize">{{ item.label }}</span>
            </button>
            </template>
        </Breadcrumb>
    </div>
</template>
<script setup>
import { Breadcrumb } from "primevue";
import { ref } from "vue";
defineProps({ items: [{label: String,url: String}]})
const home = ref(
    {icon: 'pi pi-home', url: 'All', label: ''});
</script>
