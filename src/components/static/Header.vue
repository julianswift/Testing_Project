<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
    
    <v-spacer></v-spacer>

    <div v-for="(button, key) in buttons" :key="key">
      <v-btn>{{ button }}</v-btn>
    </div>

    <v-spacer></v-spacer>
    
  </v-app-bar>
</template>

<script>
export default {
  props: ["buttons", "title"]
};
</script>

<style lang="css" scoped></style>
