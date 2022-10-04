<template>
  <h1>Birds</h1>
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
