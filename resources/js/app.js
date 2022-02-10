/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import Vue from 'vue';

import VueRouter from 'vue-router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetify);
import Homepage from './Pages/Index.vue';

const routes = [
    {
        path: '/',
        component: Homepage
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

const vuetify = new Vuetify({});

const app = new Vue({
    el: '#app',
    router: router,
    vuetify
});
