<template>
    <div>
        <div class="px-5">Body: this comes from body parent component and will be rendered in every children components</div>
        <!-- If you don't want to show body in children components you should have something like this -->
        
        <div v-if="$route.name === 'Body'">
            <h3 class="px-5">
            Only In Body (parent)
            </h3>
        </div>
        
        <!-- <router-view> render children components -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>