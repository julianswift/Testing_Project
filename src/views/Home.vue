<template>
  <div class="home">
    Home
    <img alt="Vue logo" src="../assets/logo.png" />

    <v-card class="px-5 my-5 elevation-15">
      <h3>Mechanics (doubleClick)</h3>
      <ul>
        <!-- This time, we wanted to use object.id instead of array index as a key -->
        <!-- Remember, all id should be unique -->
        <li v-for="mec in mechanics" :key="mec.id">
          <div class="link" @dblclick="goToMechanics(mec.id)">
            Go To Mechanic: {{ mec.name.toUpperCase() }}
          </div>
        </li>
      </ul>
    </v-card>

    <v-card class="px-5 my-5 elevation-15">
      <h3>Go To Mechanics X sec later after clicking button</h3>
      <h4>With dynamic mechanics id (params)</h4>
      <v-form>
        <input type="number" v-model="wait" placeholder="wait x sec" />
        <input type="number" v-model="mecID" placeholder="mecID" />
      </v-form>
      <v-btn :disabled="!wait || wait < 0 || !mecID" @click="waitXsec(wait, mecID)">
        Wait {{ wait ? wait : 0 }} Sec
      </v-btn>
    </v-card>

    

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      wait: null,
      mecID: null,
      counter: 0,

      mechanics: [
        {
          id: 10,
          name: "a"
        },
        {
          id: 20,
          name: "b"
        },
        {
          id: 30,
          name: "c"
        }
      ]
    };
  },
  methods: {
    goToMechanics(id) {
      this.$router.push({ name: "Mechanics", params: { id } });
    },
    waitXsec(sec, mecID) {
      setTimeout(() => {
        this.goToMechanics(mecID)
      }, sec * 1000);
    }
  }
};
</script>

<style lang="css" scoped>
.link {
  cursor: pointer;
}
.link:hover {
  color: red;
  text-decoration: underline;
}
</style>
