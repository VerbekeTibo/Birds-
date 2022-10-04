<template>
  <h1>Birds</h1>
  <div v-if="loading">
  Loading</div>
  <div v-else-if="error">
  <p>Error-handling</p>
  </div>
  <div v-else-if="result">
  <div v-for="b of result.birds" :key="b.id">
  {{b.name}}</div>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export default {
  setup() {
    const BIRDS = gql`
      query birds {
        birds {
          id
          name
          url
          description
          category
        }
      }
    `

    const { result, loading, error } = useQuery(BIRDS)
    console.table(result.value.birds)

    return {
      result,
      loading,
      error,
    }
  },
}
</script>