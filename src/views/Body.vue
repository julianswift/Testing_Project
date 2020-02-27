<template>
  <div>
    <div class="px-5">
      <div v-if="$route.name === 'MeditationCalendar'">
      <v-btn @click="goToBody">Back A Page</v-btn>
      </div>
    </div>
    <!-- If you don't want to show body in children components you should have something like this -->

    <div v-if="$route.name === 'Body'">
      <h3 class="px-5">Only In Body (parent)</h3>
      <figure>
        <figcaption>Gratitude</figcaption>
        <audio controls :src="audio1" style="width: 800px">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>

    <!-- <router-view> render children components -->
    <router-view></router-view>
  </div>
</template>

<script>
import a1 from "@/assets/audio/a1.mp3";

export default {
  data() {
    return {
      audio1: a1
    };
  },
  methods: {
    goToBody() {
      // Again if you need some params for that route, you can add into the obj
      // Literally same object structure with <router-link>
      this.$router.push({ name: "Body" });
    }
  }
};

// let myaudio = new Audio('mysong.mp3');
// myaudio.play()// This will play the music.
// myaudio.pause()// This will stop the music.
// myaudio.duration// Returns the length of the music track.
// myaudio.currentTime = 0// This will rewind the audio to the beginning.
// myaudio.loop = true// This will make the audio track loop.
// myaudio.muted = true// This will mute the track
</script>

<style lang="scss" scoped>
</style>