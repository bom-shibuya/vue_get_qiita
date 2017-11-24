'use strict';
import 'babel-polyfill';
// import 'whatwg-fetch';
// impot library
// import {
//   TweenMax,
//   TweenLite
// } from 'gsap';
// import ScrollToPlugin from 'ScrollToPlugin';
// import EasePack from 'EasePack';
// import modernizr from 'modernizr';
//
// console.log(modernizr);
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import { log } from 'core-js/library/web/timers';

import App from './components/App.vue';
import SearchResult from './components/qiitaSearch/SearchResult.vue';
import Post from './components/qiitaSearch/Post.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/:searchWord',
        name: 'searchResult',
        component: SearchResult
      },
      {
        path: '/:searchWord/posts/:id',
        name: 'post',
        component: Post,
        props: route => ({
          id: route.params.id
        })
      }
    ]
  }

  // {
  //   path: '/:searchWord',
  //   component: App
  // }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router
}).$mount('#app');
