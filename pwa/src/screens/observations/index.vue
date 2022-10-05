<template>
  <route-holder title="Observations">
    <ObservationsTable v-if="result" :observations="result.observations" />
  </route-holder>
</template>

<script lang="ts">
import RouteHolder from '../../components/holders/RouteHolder.vue'
import ObservationsTable from '../../components/observations/ObservationsTable.vue'
import { gql } from '@apollo/client/core'
import { useQuery } from '@vue/apollo-composable'

export default {
  components: {
    RouteHolder,
    ObservationsTable,
  },
  setup() {
    const OBSERVATIONS = gql`
      query observations {
        observations {
          id
          name
          bird {
            id
            name
          }
          location {
            id
            name
          }
          userId
          createdAt
        }
      }
    `
    const { result, loading, error } = useQuery(OBSERVATIONS)

    return {
      result,
      loading,
      error,
    }
  },
}
</script>
