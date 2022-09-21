<template>
  <div class="px-6 pt-3 pb-6">
    <footer class="mx-auto hidden max-w-6xl sm:block">
      <p class="to-neutral-800 text-sm">
        Tibo Verbeke - Disclaimer {{ new Date().getFullYear() }}
      </p>
    </footer>
    <nav class="block sm:hidden">
      <AppNavigation />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNavigation from './AppNavigation.vue'

export default defineComponent({
  setup() {},
  components: { AppNavigation },
})
</script>
