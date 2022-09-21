<template>
    <div class="flex justify-end w-full gap-12 mr-8 font-bold">
            <p class="hover:text-neutral-600">
                <router-link to="/">
                    Home
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link to="/birds">
                    Birds
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link to="/log">
                    Logs
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link to="/observations">
                    Observations
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link v-if="user" to="/account">
                    {{ user?.displayName }}
                </router-link>
                <router-link to="/auth/login" v-else>Log in</router-link>
            </p>
        </div>
</template>

<script lang="ts">
    import useAuthentication from '../../composables/useAuthentication';
 

    export default {
    setup() {
        const { user } = useAuthentication();
        return { user };
    },
    
}
</script>