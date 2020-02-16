<template>
  <div>
    Bio
    <div class="row">
      <div class="col-md-12 mb-6">
        <label for="affirmationText">Affirmation</label>
        <textarea name="affirmation" type="text" class="form-control" id="affirmationText"></textarea>
      </div>
      <div class="col-md-12 mb-6">
        <label for="affirmationText"></label>
        <v-btn @click="affPreviousPage">Affirmation Previous</v-btn>
        <br />
        <v-btn @click="affNextPage">Affirmation Next</v-btn>
        <br />
        <a
          href="javascript:"
          id="speakAff"
          class="waves-effect waves-light btn btn-primary btn-lg btn-block"
        >Speak</a>
        <br />
        <v-btn id="affToggleOn" @click="affToggleBtn">Speak Off</v-btn>
        <br />
        <v-btn id="affUpdate" @click="affToggleBtn">Update</v-btn>
        <br />
        <v-btn id="affDelete" @click="affToggleBtn">Delete</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";

var recordCounterAff = 0;
var lastIdAff = 0;
var defaultLimitAff = 3;
var limitAff = defaultLimitAff;

var affToggleOn = false;

let data = { affResponse: null };
data.affResponse = [
  { id: "1", affirmation: "Attitude of gratitude" },
  { id: "2", affirmation: "I am tolerant and forgiving" },
  { id: "3", affirmation: "Success includes fullfilment" }
];

export default {
  data() {
    return {};
  },
  created() {
    // This is called when the component generated
    this.affNextPage();
  },
  methods: {
    affPreviousPage() {
      var breakException = {};
      console.log("recordCounterAff: " + recordCounterAff);

      if (recordCounterAff > 1) {
        recordCounterAff--;
        var currentPosition = 1;

        try {
          data.affResponse.forEach(function(affirmations) {
            if (currentPosition === recordCounterAff) {
              if (affirmations.affirmation) {
                affirmationText.value = affirmations.affirmation;
                lastIdAff = affirmations.id;
              }
              console.log("currentPosition: " + currentPosition);
              console.log("lastIdAff: " + lastIdAff);
              throw breakException;
              return true;
            }
            currentPosition++;
            console.log(
              "currentPosition: " +
                currentPosition +
                " - recordCounterAff: " +
                recordCounterAff
            );
          });
        } catch (e) {
          if (e !== breakException) throw e;
        }

        if (affToggleOn == true) {
          jQuery("#speakAff").trigger("click");
        }

        return false;
      }
    },

    affToggleBtn() {
      if (affToggleOn == false) {
        affToggleOn = true;
        jQuery("#affToggleOn").html("Speak On");
      } else {
        affToggleOn = false;
        jQuery("#affToggleOn").html("Speak Off");
      }
    },

    affNextPage() {
      var breakException = {};
      if (recordCounterAff < limitAff) {
        recordCounterAff++;

        if (data.affResponse && data.affResponse.length >= recordCounterAff) {
          var currentPosition = 1;
          console.log(
            "Total Records: " +
              data.affResponse.length +
              " - recordCounterAff: " +
              recordCounterAff
          );

          try {
            data.affResponse.forEach(function(affirmations) {
              if (currentPosition === recordCounterAff) {
                if (affirmations.affirmation) {
                  affirmationText.value = affirmations.affirmation;
                  lastIdAff = affirmations.id;
                }
                console.log("currentPosition: " + currentPosition);
                console.log("lastIdAff: " + lastIdAff);
                throw breakException;
                return true;
              }
              currentPosition++;
              console.log(
                "currentPosition: " +
                  currentPosition +
                  " - recordCounterAff: " +
                  recordCounterAff
              );
            });
          } catch (e) {
            if (e !== breakException) throw e;
          }

          if (affToggleOn == true) {
            jQuery("#speakAff").trigger("click");
          }

          return false;
        }
      }
    },

    affDelete() {
      var confirmDelete = confirm("Click OK to go ahead with Delete or Cancel");
      if (!confirmDelete) {
        return;
      }
    },

    affUpdate() {}
  }
};

var jQueryvoicelist = jQuery("#voices");

jQuery(document).ready(function() {
  /* Speech Module */

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
});
</script>

<style>
#affirmationText {
  border-style: solid;
  border: 3px;
  color: black;
}

.btn {
  border-style: solid;
  border: 3px;
  padding: 5px;
}
</style>