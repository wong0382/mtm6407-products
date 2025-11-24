import { createRouter, createWebHistory } from 'vue-router';
import Products from '../views/Products.vue';
// import { Component } from 'react';


const routes =[
    {
        path: '/',
        name: 'products',
        Component: Products
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;