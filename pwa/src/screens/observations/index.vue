<template>
  <route-holder title="Observations"></route-holder>

    <RouterLink :to="'/add'" color="primary" class="mx-2">Add observation</RouterLink>
  

</template>

<script lang="ts">
import RouteHolder from '../../components/holders/RouteHolder.vue'
export default {
  components: {
    RouteHolder,
  },
}
</script>
