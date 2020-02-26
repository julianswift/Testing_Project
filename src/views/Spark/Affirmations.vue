<template>
  <div class="mx-5">
      Affirmation

      <br>
      this time, we need to send another request to backend to get singlePost response.
      with vuex if the whole posts list are fetched, we had been able to use them in order to render only one post. 
      We could pass single post object after fetching all posts (by using props) this will work if the user goes to AFFIRMATION page
      from the list on INSIGHT however it won't work if the user directly reach the AFFIRMATION page via url.
      This is why we need to send another req to backend.

      <br>
      <h4>Side note:</h4> this backend that we use for the demo project sometimes doesn't seem working properly. There might be some issues
      on their end, please keep in mind 

      <h3 class="px-5">Post: {{ id }}</h3>
    <div v-if="singlePost">
      <v-card class="mx-auto mt-5" max-width="400" tile>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{ singlePost.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ singlePost.body }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>

        <v-card class="mx-auto mt-5 elevation-0" max-width="400">
                    <h3>
            <router-link :to="{name: 'Insights'}">All Posts</router-link>
        </h3>
        </v-card>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                singlePost: null
            }
        },
        computed: {
            id(){
                return this.$route.params.mID
            },
        },
        created(){
            this.getSinglePost(this.id)
        },
        methods: {
            async getSinglePost(postID) {
                console.log(postID, 'fetched')
                try {
                    console.log( "?")
                    const url = `https://jsonplaceholder.typicode.com/posts/${postID}`
                    const response = await axios.get(url)
                    console.log(response.data)
                    this.singlePost = response.data
                } catch (error) {
                    console.log("ERROR: Actions: getPosts", error)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>