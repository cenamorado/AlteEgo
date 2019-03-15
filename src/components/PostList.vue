<template>
  <div v-if="postslist.length > 0" class="post-container">
    <router-link v-for="(post, index) in postslist" :key="index" :to="'/post/'+post.slug">
      <div v-for="(category, index) in post.categories" :key="index">
        <div class="post-item">
          <img
            v-for="(image, index) in post.featured_images"
            :key="index"
            :src="image.path"
            :alt="post.title"
            class="post-item-img"
          >
          <div class="post-item-content">
            <h3>{{ post.title }}</h3>
            <p>{{post.excerpt}}</p>
            <hr>
            <div class="social-content">
              <div class="comments">
                <a href>
                  <i class="fas fa-comment"></i>
                  <p>16 Comentarios</p>
                </a>
              </div>
              <div class="shares">
                <a href>
                  <i class="fas fa-share"></i>
                  <p>Share</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postslist: []
    }
  },
  watch: {
    '$route' (to, from) {
      this.getPosts()
    }
  },
  methods: {
    getPosts() {
      return new Promise((resolve, reject) => {
        axios
          .get(
            'http://adhara.devel/api/posts?category=' +
              this.$route.params.category
          )
          .then(respuesta => {
            this.postslist = respuesta.data.data
            resolve(respuesta)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>
<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .post-item {
    width: 100%;
    margin: 5px 0;
    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .post-item-content {
      margin: 0 auto;
      width: 90%;
      padding: 15px 45px;
      -webkit-box-shadow: 0px 0px 41px -10px rgba(0, 0, 0, 0.61);
      -moz-box-shadow: 0px 0px 41px -10px rgba(0, 0, 0, 0.61);
      box-shadow: 0px 0px 41px -10px rgba(0, 0, 0, 0.61);
      p {
        font-weight: 700;
      }
      .social-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .comments,
        .shares {
          a {
            display: flex;
            p {
              margin: 0;
            }
          }
          i {
            margin: 0 10px;
          }
        }
      }
    }
  }
}
@media (max-width: 575.98px) {
  .post-container {
    .post-item {
      h3 {
        font-size: 20px;
      }
      .post-item-content {
        padding: 15px 15px;
        p {
          font-size: 13px;
        }
      }
    }
  }
}
</style>