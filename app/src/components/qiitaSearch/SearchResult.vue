<template lang="pug">
  ul.searchResult
    li.searchResult__item(v-for="post in postData")
      router-link(:to="{name: 'post', params: { id: post.id }}")
        article.post
          h1.post__title {{ post.title }}
          p.post__text {{ post.rendered_body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').slice(0, 240) }}
</template>

<script>
export default {
  props: {
    postData: Array
  }
}
</script>

<style lang="sass" scoped>
  .searchResult
    margin-top: 2.4rem
  .searchResult__item
    margin-bottom: 1.6rem
  .post__title
    font-size: 2rem
    font-weight: bold
    margin-bottom: .6rem
    line-height: 1.4
  .post__text
    line-height: 1.75
</style>