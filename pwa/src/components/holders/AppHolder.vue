<template>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script lang="ts">
import AppFooter from '../../screens/generic/AppFooter.vue'

export default {
    components: { AppFooter }
}
</script>
