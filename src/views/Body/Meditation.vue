<template>
  <div>
    <div v-if="singlePost">
      <v-card class="mx-auto mt-5" max-width="400" tile>
          <h3 class="px-5">Post: {{ id }}</h3>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{ singlePost.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ singlePost.body }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>

        <v-card class="mx-auto mt-5 elevation-0" max-width="400">
                    <h3>
            <router-link :to="{name: 'BodyFocus'}">All Posts</router-link>
        </h3>
        </v-card>

    </div>
    
    <div v-else>
        There is no Posts in the site, <router-link :to="{name: 'BodyFocus'}">go and fetch posts</router-link>.
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPostsById"]),
    id(){
        return this.$route.params.mID
    },
    singlePost(){
        return this.getPostsById(this.id)
    }
  },
};
</script>

<style lang="scss" scoped></style>
