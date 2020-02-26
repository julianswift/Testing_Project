<template>
  <div>
    <h3 class="mx-5">Spark</h3>

    <router-view></router-view>

    <hr><hr> 
    <h3>As you remember these all comes from parent component</h3>
    <v-container>
      <v-row class="my-5">
        <v-card class="elevation-10" min-width="100%">
          <h3 for="affirmationText">Boolean Usage</h3>

          <h4>
            Set opposite value of boolean without using method that is defined
            in js
          </h4>
          <v-btn
            block
            color="primary"
            class="my-1"
            @click="boolean1 = !boolean1"
            >Boolean1: {{ boolean1 }}</v-btn
          >

          <h4>
            Also you can change the text with v-if. This is not very useful for
            only one static element changes
          </h4>
          <v-card dark class="pa-2">
            <div v-if="boolean1">
              Case 1
            </div>
            <div v-else>
              Case 2
            </div>
          </v-card>

          <h4>
            Change static text without method & v-if (Best Practice for having a
            boolean and related to that boolean, there is a different static
            texts)
          </h4>
          <v-btn
            block
            color="primary"
            class="my-1"
            @click="boolean2 = !boolean2"
          >
            Static Text -->
            {{ boolean2 ? "True Case" : "False Something else" }}
          </v-btn>
          boolean2: {{ boolean2 }}
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boolean1: true,
      boolean2: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
