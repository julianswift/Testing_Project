<template>
  <v-app>
    <Header :title="this.$route.name" :buttons="buttons[this.$route.name]" />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/static/Header";
import Footer from "@/components/static/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    buttons: {
      Mechanics: [
        {
          name: "psychology",
          pathName: "",
          params: {}
        },
        {
          name: "emotions",
          pathName: "",
          params: {}
        },
        {
          name: "vocabulary",
          pathName: "",
          params: {}
        }
      ],
      Body: [
        {
          name: "meditation",
          pathName: "Meditation",
          params: {mID: 1}
        },
        {
          name: "body-focus",
          pathName: "BodyFocus",
          params: {}
        },
        {
          name: "geometry",
          pathName: "Geometry",
          params: {}
        }
      ],
      Spark: [
        {
          name: "affirmations",
          pathName: "Affirmations",
          params: {mID: 1}
        },
        {
          name: "insights",
          pathName: "Insights",
          params: {}
        },
        {
          name: "guidance",
          pathName: "",
          params: {}
        }
      ]
    }
  }),
  created() {
    console.log(this.$route);
  }
};
</script>
