<template>
  <div class="flex items-center justify-between">
    <router-link class="h-14 w-14" to="/">
      <logo class="mb-6 h-14 w-14"></logo>
    </router-link>
    <div class="flex w-1/2 justify-between">
      <router-link to="/">
        <h1>Home</h1>
      </router-link>
      <router-link to="/birds">
        <h1>Birds</h1>
      </router-link>
      <router-link to="/log">
        <h1>Logs</h1>
      </router-link>
      <router-link to="/observations">
        <h1>Observations</h1>
      </router-link>
      <router-link to="/Account">
        <h1>{{ user?.displayName }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useAuthentication from '../../composables/useAuthentication'
import Logo from './Logo.vue'

export default {
  setup() {
    const { user } = useAuthentication()

    return {
      user,
    }
  },
}
</script>
