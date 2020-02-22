<template>
  <div>
    <h3 class="px-5">Body Focus</h3>

    <v-btn @click="getPosts">Get Posts</v-btn>

    <div v-if="posts">
      <v-card class="mx-auto" max-width="400" tile>
        <v-list-item two-line 
            v-for="post in posts" :key="post.id"
            @click="$router.push({name: 'Meditation', params: {mID: post.id}})"
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
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    // Register states. Same name in store. After registering you can use this data
    // inside this component by using this.data_name
    ...mapState(["posts"])
  },
  methods: {
    // Register action. Same name in store. After registering you can use this method
    // inside this component by using this.method_name
    ...mapActions(["getPosts"])
  }
};
</script>

<style lang="scss" scoped></style>
