<template>
    <slot></slot>
</template>
<script setup>
import { computed, provide, ref } from 'vue';
const cart = ref([]);
function addToCart(product) {
    if(cart.value.length == 0 || !cart.value.find(item => item.id == product.id)){
        cart.value.push(
            {...product,
            quantity: 1,
            total: product.price * 1
        });
    }else{
        const newCart = cart.value.find(item => item.id == product.id);
        newCart.quantity += 1;
        newCart.total = newCart.quantity * product.price;
    }
}
function removeFromCart(product) {
    cart.value = cart.value
    .filter(item => item.id != product.id)
    .filter(item => item.quantity > 0);
}

function takeCart(product) {
    const newCart = cart.value.find(item => item.id == product.id)
    newCart.quantity -= 1
    newCart.total -= product.price
}
function getQuantityCart(product) {
    const findCard = cart.value.find(item => item.id == product.id)
    if(findCard){
        return findCard.quantity
    }else{
        return 0
    }
}
const allCart = computed(() => cart.value.filter(item => item.quantity > 0));
const cartTotal = computed(() => cart.value
.map(item => item.total)
.reduce((a, b) => a + b, 0))
provide('cart', {
cart : allCart,
cartTotal, 
addToCart, 
removeFromCart,
getQuantityCart,
takeCart
});
</script>