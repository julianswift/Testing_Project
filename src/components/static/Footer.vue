 <template>
  <v-footer fixed padless>
    <v-card flat tile width="100%" class="red darken-2 text-center">
      <v-card-text>
        <!-- If you don't need any params you can use basically -->
        <!-- :to="link.pathName" (name field in the route object) -->
        <!-- Otherwise, you need to use obj and tell it explicity -->
        <!-- This example contains complex object structure rather than simple name string -->
          <router-link 
            v-for="(link, key) in links" :key="key"
           :to="{name: link.pathName, params: link.params}"
          >
            <v-btn class="mx-4">
              <span>{{link.pathName}}</span>
            </v-btn>
          </router-link>

          <!-- TODO: Assignment: Create navigator buttons with a method  -->
          <!-- without using using <router-link> approach -->
          <!-- You'll find an example in Mechanics.vue if you stuck -->

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>{{ projectName }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    // TODO: Add link paths after routing is done
  data: () => ({
    projectName: "Vue Testing",
    links: [
      {
        icon: "mdi-home",
        pathName: "Home",
        params: {}
      },
      {
        icon: "mdi-email",
        pathName: "Mechanics",
        params: {id: 1}
      },
      {
        icon: "mdi-calendar",
        pathName: "Body",
        params: {}
      },
      {
        icon: "mdi-delete",
        pathName: "Spark",
        params: {}
      },
      {
        icon: "mdi-delete",
        pathName: "Bio",
        params: {}
      },
    ]
  }),
  created() {
    console.log('routers', this.$router)
  }
};
</script>

<style lang="css" scoped>

</style>