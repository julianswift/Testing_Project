<template>
  <v-footer fixed padless>
    <v-card flat tile width="100%" class="red darken-2 text-center">
      <v-card-text>
        <v-btn v-for="(link, key) in links" :key="key" class="mx-4" icon>
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
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
        pathName: ""
      },
      {
        icon: "mdi-email",
        pathName: ""
      },
      {
        icon: "mdi-calendar",
        pathName: ""
      },
      {
        icon: "mdi-delete",
        pathName: ""
      }
    ]
  })
};
</script>

<style lang="css" scoped>

</style>