<template>
    <header>
        <nav>
            <router-link class="" to="/">
            <Logo/></router-link>

            <ul class=' flex items-center space-x-3  text-sm'>
                <li>
                    <router-link class="px-3 py-6" to="/"></router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo'

export default defineComponent({
    setup() {
        
    },
})
</script>
