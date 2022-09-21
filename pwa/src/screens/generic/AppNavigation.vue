<template>
    <div class="flex justify-end w-full gap-12 mr-8 font-bold">
            <p class="hover:text-neutral-600">
                <router-link class=""  to="/">
                    <Home class="mx-auto mb-2 h-5 sm:hidden"/>
                    Home
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link active-class="opacity-40" to="/birds">
                    <Feather class="mx-auto mb-2 h-5 sm:hidden"/>
                    Birds
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link active-class="opacity-40" to="/log">
                    <Scroll class="mx-auto mb-2 h-5 sm:hidden"/>
                    Logs
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link active-class="opacity-40" to="/observations">
                    <Clipboard class="mx-auto mb-2 h-5 sm:hidden"/>
                    Observations
                </router-link>
            </p>
            <p class="hover:text-neutral-600">
                <router-link active-class="opacity-40" v-if="user" to="/account">
                    <User class="mx-auto mb-2 h-5 sm:hidden"/>
                    {{ user?.displayName }}
                </router-link>
                <router-link active-class="opacity-40" to="/auth/login" v-else>
                    <LogIn class="mx-auto mb-2 h-5 sm:hidden"/>Log in</router-link>
            </p>
        </div>
</template>

<script lang="ts">
    import useAuthentication from '../../composables/useAuthentication';
    import { Home, Feather, Scroll, Clipboard, User, LogIn} from 'lucide-vue-next'

    export default {
        components: {Home, Feather, Scroll, Clipboard, User, LogIn},
    setup() {
        const { user } = useAuthentication();
        return { user };
    },
    
}
</script>