<template>
  <div>
    Bio
    <v-container>
      <v-row>
        <v-card class="elevation-10" min-width="100%">
          <h3 for="affirmationText">Affirmation</h3>
          <v-textarea v-model="affResponse"></v-textarea>
          <!-- TODO: Could you please, put these inside an array of objects -->
          <!-- This kind of approach doesn't use in the most of the projects -->
          <!-- However it is going to be really nice exercise -->
          <!-- It contains really hard parts/concerns however you don't need these while -->
          <!-- creating this business logic. -->
          <!-- I'll let you know these concerns when it is done -->
          <!-- I have already built this one but let you try also. -->

          <!--           
          <v-btn block color="primary" class="my-1" @click="previousAff">Previous</v-btn>
          <v-btn block color="primary" class="my-1" @click="nextAff">Next</v-btn>
          <v-btn block color="primary" class="my-1" @click="affToggleBtn">{{affSpeakStatus}}</v-btn>
          <v-btn block color="primary" class="my-1">Speak</v-btn>
          <v-btn block color="primary" class="my-1">Update</v-btn>
          <v-btn block color="primary" class="my-1">Delete</v-btn>
          -->
        </v-card>
      </v-row>

      <!-- Let's do this here, without harming previous code -->
      <v-row>
        <v-card class="elevation-10" min-width="100%">
          <h3 for="affirmationText">Affirmation</h3>
          <v-textarea v-model="affResponse"></v-textarea>

          <!-- buttons v-for -->

          <v-btn
            v-for="(button , key) in affButtons"
            :key="key"
            block
            color="primary"
            class="my-1"
            @click="button.method"
          >{{button.title}}</v-btn>

        </v-card>
      </v-row>

      <div>{{affButtons}}</div>

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
  props: ["buttons", "title"],
  data() {
    return { 
      // First of all you need to set these as a method not string, such as this.previousAff()
      // Second, if you put () at the end of method, you will run this function when this object created which we don't want to do that.
      // we want to call it when the button clicked not object created. Let's remove (), such as this.previousAff
      // Try to take a look at console log with (), you will see previousAff called lines when page loaded.

      // This is all working fine as expected on the surface, if you click buttons you will see all buttons can be clicked and working (have a look at console)
      // The weird thing is, let's try to render this affButtons object
      // As you see, the response is [ { "title": "Previous" }, { "title": "Next" }, {}, { "title": "Speak" }, { "title": "Update" }, { "title": "Delete" } ]
      // The question is where is the method fields, and where is the title for affSpeakStatus (it renders empty object)
      // Also we can't see even the dynamic text on the button as well as you detected. 
      // Let's sort out button text issue first. 
      // GO TO NEXT COMMIT

      // ----------------- COMMIT 2 ------------------------
      // Let's put all this static button array of objects into a method and return the array
      // Call setAffButtons when instance created 
      // At this point actually there is no difference than putting this array into data. 
      // Again we can use method functionalities, this time at least we can see Speak Off (which is coming from dynamic field of affSpeakStatus)
      // but the problem is again we can't see any changes when we clicked affToggleBtn. 
      // remember it is working properly, you can see if you render {{affSpeakStatus}} in the template, problem is, it is not reflected on button text.
      // solution is easy, let's define a watcher

      affButtons: [],
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
    this.setAffButtons();
    this.nextAff();
  },
  watch: {
    // this should be same name with the data/prop name
    affSpeakStatus(val) {
      console.log('You can listen changed value if you want, it is redundant for this example though', val)
      // We are overwriting the button object when the affSpeakStatus changed, because the reason of the problem
      // not seeing changed value of affSpeakStatus inside affButtons related object
      // when data changed, the button array/object which has dependent dynamic field isn't updated. It is non-reactive
      // This totally solve every problems from the functionality point of view.
      
      /* this.setAffButtons() */

      // If you want you can directly reach affButtons array, select the particular object
      // update only that object instead of overwriting whole array.
      this.affButtons[2].title = val
    }
  },
  methods: {
    setAffButtons() {
      this.affButtons = [
        { method: this.previousAff, title: "Previous" },
        { method: this.nextAff, title: "Next" },
        { method: this.affToggleBtn, title: this.affSpeakStatus },
        { method: this.affSpeak, title: "Speak" },
        { method: this.affUpdate, title: "Update" },
        { method: this.affDelete, title: "Delete" }
      ]
    },
    setAffResponse(id) {
      const data = this.affData.find(d => d.id == id);
      this.affResponse = data.affirmation;
    },
    previousAff() {
      console.log('previousAff called')
      if (this.counter > 1) {
        this.counter--;
        this.setAffResponse(this.counter);
      }
    },
    nextAff() {
      console.log('nextAff called')
      if (this.counter < this.affData.length) {
        this.counter++;
        this.setAffResponse(this.counter);
      }
    },
    affToggleBtn() {
      console.log('affToggleBtn called')
      if (this.affToggleOn) {
        this.affToggleOn = false;
        this.affSpeakStatus = "Speak Off";
      } else {
        this.affToggleOn = true;
        this.affSpeakStatus = "Speak On";
      }
    },
    affSpeak() {
      console.log('affSpeak called')
    },

    affUpdate() {
      console.log('affUpdate called')
    },

    affDelete() {
     console.log('affDelete called')
    }
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