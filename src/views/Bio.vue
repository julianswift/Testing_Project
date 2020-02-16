<template>
  <div>
    Bio
    <v-container>
      <v-row>
        <v-card class="elevation-10" min-width="100%">
          <h3 for="affirmationText">Affirmation</h3>
          <v-textarea v-model="affResponse"></v-textarea>
          <v-btn block color="primary" class="my-1" @click="previousAff">Previous</v-btn>
          <v-btn block color="primary" class="my-1" @click="nextAff">Next</v-btn>
          <v-btn block color="primary" class="my-1" @click="affToggleBtn">{{affSpeakStatus}}</v-btn>
          <v-btn block color="primary" class="my-1">Speak</v-btn>
          <v-btn block color="primary" class="my-1">Update</v-btn>
          <v-btn block color="primary" class="my-1">Delete</v-btn>
        </v-card>
      </v-row>

      <v-row class="my-5">
        <v-card dark class="pa-5">
          <h4>affData: {{affData}}</h4>
          <h4>affResponse: {{affResponse}}</h4>
          <h4>counter: {{counter}}</h4>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import staticData from "@/assets/json/affirmationDataset";
import jQuery from "jquery";

export default {
  data() {
    return {
      // You need to register staticData as a Vue Data
      affData: staticData,
      // Thanks to 2 ways binding, we can change this value from textarea html element
      // and with js (vue) methods
      affResponse: null,
      counter: 0,
      affToggleOn: false,
      affSpeakStatus: "Speak Off"
    };
  },
  created() {
    this.nextAff();
  },
  methods: {
    setAffResponse(id) {
      const data = this.affData.find(d => d.id == id);
      this.affResponse = data.affirmation;
    },
    previousAff() {
      if (this.counter > 1) {
        this.counter--;
        this.setAffResponse(this.counter);
      }
    },
    nextAff() {
      if (this.counter < this.affData.length) {
        this.counter++;
        this.setAffResponse(this.counter);
      }
    },

    affToggleBtn() {
      if (this.affToggleOn) {
        this.affToggleOn = false;
        this.affSpeakStatus = "Speak Off";
      } else {
        this.affToggleOn = true;
        this.affSpeakStatus = "Speak On";
      }
    },

    affDelete() {
      // var confirmDelete = confirm("Click OK to go ahead with Delete or Cancel");
      // if (!confirmDelete) {
      //   return;
      // }
    },

    affUpdate() {}
  }
};

/* var jQueryvoicelist = jQuery("#voices");

jQuery(document).ready(function() {
  jQuery(function() {
    if ("speechSynthesis" in window) {
      jQuery("#speakAff").click(function() {
        var text = jQuery("#affirmationText").val();
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[jQuery("#voices").val()];
        msg.rate = jQuery("#rate").val() / 10;
        msg.pitch = jQuery("#pitch").val();
        msg.text = text;

        msg.onend = function(e) {
          console.log("Finished in " + event.elapsedTime + " seconds.");
        };

        speechSynthesis.speak(msg);
      });

      jQuery("#speak").click(function() {
        var text = jQuery("#message").val();
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[jQuery("#voices").val()];
        msg.rate = jQuery("#rate").val() / 10;
        msg.pitch = jQuery("#pitch").val();
        msg.text = text;

        msg.onend = function(e) {
          console.log("Finished in " + event.elapsedTime + " seconds.");
        };

        speechSynthesis.speak(msg);
      });
    } else {
      alert("Speech in Browser-App Not Supported");
    }
  });
}); */
</script>