<template>
<AppHeader/>
  <div class="grid min-h-screen place-items-center bg-neutral-50">
    <div class="w-full max-w-lg px-6">
      

      <div class="mb-20 rounded-md bg-white p-6 shadow">
        
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import AppHeader from '../../screens/generic/AppHeader.vue';

export default {
    components: { AppHeader }
}
</script>
