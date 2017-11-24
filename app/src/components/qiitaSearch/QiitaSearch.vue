<template lang="pug">
  .QiitaSearch
    h1.heading Guys!! Search Post in Qiita!!
    input.input(v-model="searchWord" @keyup.enter="search" placeholder="Enter search key word!!")
    button.btn(@click="search") Search!
    router-view(:postData="postData")
</template>

<script>
import axios from 'axios';
import SearchResult from './SearchResult.vue';
const apiUrl = 'https://qiita.com/api/v2/items';

export default {
  data: function() {
    return {
      searchWord: this.$route.params.searchWord,
      postData: []
    };
  },
  created() {
    if (this.searchWord) {
      this.search();
    }
  },
  methods: {
    search: function() {
      console.log(this.$route.params.searchWord);
      const $this = this;
      axios.get(`${apiUrl}?page=1&per_page=10&query=tag%3A${this.searchWord}`)
        .then(function(res) {
          $this.postData = res.data;
          $this.$router.push({name: 'searchResult', params: {searchWord: $this.searchWord}});
        })
        .catch(function(res) {console.log(res)});
    }
  },
  components: {
    SearchResult
  }
}
</script>

<style lang="sass" scoped>
  .heading
    margin: 3.2rem 0 1.6rem
    font-size: 1.6rem
  .input
    box-shadow: 2px 2px 2px rgba(20, 200, 100, .4)
    font-size: 1.6rem
    border: 1px solid rgba(20, 200, 100, .4)
    padding: .6rem 1rem
    border-radius: 1.6rem
    margin-right: 1.2rem
</style>

