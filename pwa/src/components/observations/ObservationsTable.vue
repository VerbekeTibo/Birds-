<template>
  <table>
    <tr>
      <th>Image</th>

      <th>Bird</th>

      <th>Location</th>

      <th>Description</th>

      <th>User</th>

      <th>Spotted on</th>
    </tr>

    <tbody v-if="observations.length > 0">
      <tr v-for="o of observations" :key="o.id">
        <td>
          <img :src="`/birds/${o.bird.name}.webp`" class="h-24" />
        </td>
        <td class=" py px-28" >{{ o.bird.name }}</td>
        <td>{{ o.location.name }}</td>
        <td>{{ o.name }}</td>
        <td>{{ o.userId }}</td>
        <td>{{ o.createdAt }}</td>
      </tr>
    </tbody>
    <tbody v-else>
      <p>No observations yet.</p>
    </tbody>
  </table>
</template>

<script lang="ts">

import Observation from '../../interfaces/interface.observation'

export default {
props: {
  observations: {
    type: Array as () => Observation[],
    required: true,
  },
},

  setup(props:any) {
    

    return {
      observations: props.observations,
    }
  },
}
</script>