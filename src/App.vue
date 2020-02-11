<template>
  <v-app>

    <Header />

    <v-content>

      lorem1500

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
