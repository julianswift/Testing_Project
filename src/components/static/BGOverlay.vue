<template>
  <div class="contents">
    <h3>{{myPropBackgroundImageAlt}}</h3>
  </div>
</template>

<script>

import meditationStore from "@/store/meditation";

export default {
  props: ["myPropBackgroundImageAlt"],
  data() {
    return {
      title: meditationStore.data.textOverlays[0].title,
      contents:  meditationStore.data.textOverlays[0].contents
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
  bottom: 5%;
  left: 40%;
  width: 60%;
  text-align: center;
  z-index: 9;
}
</style>
