<template>
  <div class="grid min-h-screen place-items-center bg-neutral-50">
    <div class="w-full max-w-lg px-6">
      <router-link class="w-14 h-14" to="/">
      <logo class="mb-6 w-14 h-14"></logo>
    </router-link>

      <div class="mb-20 rounded-md bg-white p-6 shadow">
        <app-header></app-header>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '../../screens/generic/Logo.vue';
 
  
  
 
  
  </script>

