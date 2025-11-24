<script setup>
    // import { useEffect } from 'react';
    import { ALL_PRODUCTS_URL } from '../utils';
    import {useFetch} from '@vueuse/core'
    import { onMounted, ref } from 'vue';

    const products = ref([]);

    const fetchProducts = async () => {
        useFetch(ALL_PRODUCTS_URL).json()
        .then((data) => {})
            products.value = data.data
    }

    onMounted(() => {
        fetchProducts();
    })
</script>

<template>
    <h1>All products</h1>

</template>

<style scoped>

</style>
