<template>
  <div>
      <p>When you refresh page, you will lose vuex store data as well but, if you go somewhere else and come back this page,
          you will again see the data in store (posts list will be seen if it's already fetched) However, if you don't use vuex
          like this case, data won't be persistent.
      </p>
    <h3 class="px-5">Insight</h3> This is not vuex, calling component method (getPosts).

    <v-btn @click="getPosts">Get Posts</v-btn>
    <div v-if="posts">
      <v-card class="mx-auto" max-width="400" tile>
        <v-list-item two-line 
            v-for="post in posts" :key="post.id"
            @click="$router.push({name: 'Affirmations', params: {mID: post.id}})"
        >
          <v-list-item-content>
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                posts: []
            }
        },
        methods: {
            async getPosts() {
                try {
                    const url = 'https://jsonplaceholder.typicode.com/posts'
                    const response = await axios.get(url)
                    this.posts = response.data
                    console.log(response.data)
                } catch (error) {
                    console.log("ERROR:", error)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>