<template lang="pug">
    article.article
      h1.article__title {{ article.title }}
      div.article__text(v-html="article.rendered_body")
      .returnBtn(@click="backList") 一覧に戻る
</template>

<script>
const apiUrl = 'https://qiita.com/api/v2/items';
import axios from 'axios';

export default {
  props: {
    id: String
  },
  data: function() {
    return {
      article: {
        title: '',
        rendered_body: ''
      }
    }
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      const $this = this;
      axios.get(`${apiUrl}/${this.id}`)
        .then(function(res) {
          $this.article = res.data;
        })
        .catch(function(res) {console.log(res)});
    },
    backList() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="sass" scoped>
  .article
    margin: 2.4rem auto
    &__title
      font-weight: bold
      font-size: 2.4rem
      margin-bottom: 1.2rem
    &__text
      line-height: 1.75
      p
        margin-bottom: 1rem
  .returnBtn
    color: white
    background-color: rgba(20, 200, 200, 1)
    font-weight: bold
    padding: 1rem 1.6rem
    border-radius: 2rem
    margin-top: 2.4rem
</style>