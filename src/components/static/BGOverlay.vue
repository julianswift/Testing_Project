<template>
  <div class="contents">
    <h1>Background Overlay</h1>
    <v-spacer></v-spacer>
    <p>Contents</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
.contents {
  position: absolute;
  top: 5%;
  left: 40%;
  width: 60%;
  padding-top: 5rem;
  text-align: center;
  z-index: 9;
}
</style>
