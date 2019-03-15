<template>
  <div class="container">
    <h3>{{post.title}}</h3>
    <img
      v-for="(image, index) in post.featured_images"
      :key="index"
      :src="image.path"
      :alt="post.title"
      class="post-image"
    >
    <p class="mt-3">{{post.content}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    const apiLink = 'http://adhara.devel/api/post/'
    const slug = this.$route.params.slug
    const url = apiLink + slug
    axios.get(url).then(respuesta => {
      this.post = respuesta.data
    })
  },
  data() {
    return {
      post: [],
      slug: this.$route.params.slug
    }
  }
}
</script>

<style scoped>
    .post-image {
        width: 100%;
        height: auto;
    }
</style>