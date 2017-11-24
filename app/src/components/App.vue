<template lang="pug">
  .l-global
    Greeting(:greeting="greeting")
    QiitaSearch
</template>

<script>
import axios from 'axios';
// axios.get('https://qiita.com/api/v2/items?page=1&per_page=10&query=tag%3AJavascript')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
import Greeting from './Greeting.vue';
import QiitaSearch from './qiitaSearch/QiitaSearch.vue';

export default {
  data: function() {
    return {
      greeting: 'HELLO! CRAZY WORLD!!!'
    }
  },
  components: {
    Greeting,
    QiitaSearch
  }
}
</script>

<style lang="sass">
  .l-global
    padding: 3.2rem
</style>