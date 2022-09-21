<template>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script lang="ts">
import AppFooter from '../../screens/generic/AppFooter.vue'
import AppHeader from '../../screens/generic/AppHeader.vue';

export default {
    components: { AppFooter, AppHeader }
}
</script>
