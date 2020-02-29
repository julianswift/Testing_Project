<template>
  <div>
    <div class="px-5">
      <div class="grid-container">
        <a href="javascript:" v-on:click="swapImage(0)">
          <Span>
            <div class="grid-item">1</div>
          </Span>
        </a>
        <a href="javascript:" v-on:click="swapImage(1)">
          <Span>
            <div class="grid-item">2</div>
          </Span>
        </a>
<!--         
        {{backgrounds}} -->

        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </div>
      <BGOverlay></BGOverlay>
      <div class="bgImageContainer grid-item">
        <img :src="backgroundImageSrc" :alt="backgroundImageAlt" width="100%" />
      </div>

      <div class="audioContainer">
        <figure>
          <figcaption>Audio Background</figcaption>
          <audio id="audioControls" controls :src="backgroundAudio">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    </div>

    <!-- <router-view> render children components -->
    <router-view></router-view>
  </div>
</template>

<script>
import bg1 from "@/assets/backgrounds/bg1.png";
import bg2 from "@/assets/backgrounds/bg2.png";
import a1 from "@/assets/audio/a1.mp3";
import a2 from "@/assets/audio/a2.mp3";
import BGOverlay from "@/components/static/BGOverlay";

// Vue.component('button-counter', {
//   data: function () {
//     return {
      
//     }
//   },
//   template: ''
// )}

export default {
  components: {
   BGOverlay
  },
  data() {
    return {
      selected: 0,
    };
  },
  computed: {
    backgroundImageSrc() {
      return this.backgrounds[this.selected].imageName;
    },
    backgroundImageAlt() {
      return this.backgrounds[this.selected].alt;
    },
    backgroundAudio() {
      return this.backgrounds[this.selected].audio;
    },
    backgrounds: function() {
      return [
        { imageName: bg1, id: 1, alt: "Gardens 1", audio: a1, },
        { imageName: bg2, id: 2, alt: "Gardens 2", audio: a2 }
      ];
    }
  },
  methods: {
    swapImage(bgId) {
      this.selected = bgId;
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
.audioContainer {
  position: absolute;
  bottom: 17%;
  left: 0%;
  width:40%;
} 
figure {
  padding: 1rem;
}
#audioControls {
 width:100%;
}
.bgImageContainer {
  background-color: #2196f3;
  display: grid;
  grid-template-columns: auto auto auto;
  position: absolute;
  top: 5%;
  right: 0%;
  width: 60%;
}
.grid-container {
  position: absolute;
  top: 5%;
  left: 0%;
  width: 40%;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 0.9rem;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 0.5rem solid rgba(0, 0, 0, 0.8);
  padding: 1.5rem;
  font-size: 3rem;
  text-align: center;
}
</style>