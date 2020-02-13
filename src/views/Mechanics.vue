<template>
    <div>
        Mechanics <br>
        <!-- You can reach route object directly on html template -->
        {{$route.params}} <br>

        <v-btn @click="goToHome">Go To Home</v-btn>
    </div>
</template>

<script>
    export default {
        created() {
            // This is called when the component generated
            this.getRouteDetails();
        },
        methods: {
            // You can reach route object in here as well
            getRouteDetails() {
                const routeDetails = this.$route
                console.log(routeDetails)
            },
            // You can go any route without using <router-link> 
            // This is useful when you need to control some logic in JS level 
            goToHome() {
                // Again if you need some params for that route, you can add into the obj
                // Literally same object structure with <router-link>
                this.$router.push({ name: 'Home' })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>