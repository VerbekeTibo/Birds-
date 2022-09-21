<template>
    <div class="flex justify-between h-24 items-center">
        <div class="w-16 h-16 mt-4 ml-4 hover:animate-spin">
            <router-link to="/">
                <Logo class="w-max h-max"/>
            </router-link>
        </div>
      <AppNavigation/>
    </div>
</template>

<script lang="ts">

    import Logo from './logo.vue';
    import AppNavigation from '../generic/AppNavigation.vue'

    export default {
    setup() {
       
        
    },
    components: {
        Logo,
        AppNavigation
    }
}
</script>