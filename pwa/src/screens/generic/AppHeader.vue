<template>
  <div class="flex h-24 items-center justify-between">
    <div class="mt-4 ml-4 h-16 w-16 hover:animate-spin">
      <router-link to="/">
        <Logo class="h-max w-max" />
      </router-link>
    </div>
    <div class="hidden sm:flex">
      <app-navigation />
    </div>
  </div>
</template>

<script lang="ts">
import Logo from './logo.vue'

import AppNavigation from '../generic/AppNavigation.vue'

export default {
  setup() {},
  components: {
    Logo,
    AppNavigation,
  },
}
</script>
