<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import ProviderCardProduct from './Providers/ProviderCardProduct.vue';
</script>
<template>
  <ProviderCardProduct>
    <Header />
    <main>
       <RouterView />
    </main>
  <Footer/>
  </ProviderCardProduct>
</template>