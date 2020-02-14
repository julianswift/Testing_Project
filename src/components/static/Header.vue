<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link
      v-for="(button, key) in buttons"
      :key="key"
      :to="{ name: button.pathName, params: button.params }"
    >
      <v-btn class="mx-4">
        <span>{{ button.name }}</span>
      </v-btn>
    </router-link>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  props: ["buttons", "title"]
};
</script>

<style lang="css" scoped>
a {
    text-decoration: none;
}
</style>
