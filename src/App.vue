<template>
  <v-app>

    <Header />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/static/Header'
import Footer from '@/components/static/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    
  }),
};
</script>
