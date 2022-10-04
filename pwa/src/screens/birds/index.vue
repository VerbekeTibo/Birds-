<template>
  <div class="px-6">
    <div class="mx-auto max-w-6xl">
      <h1 class="font-theme text-3xl font-bold">Birds</h1>

      <div
        class="grid animate-pulse gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        v-if="loading"
      >
        <div v-for="i of 10" :key="i">
          <div class="aspect-square bg-neutral-200"></div>
          <p class="my-1 h-6 w-12 rounded bg-neutral-200"></p>
          <p class="my-2 h-6 w-12 rounded bg-neutral-100"></p>
        </div>
      </div>
      <div v-else-if="error">
        <p>Error happened.</p>
      </div>
      <div
        class="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        v-else-if="result"
      >
        <RouterLink :to="`birds/${b.id}`" v-for="b of result.birds" :key="b.id">
          <img
            class="aspect-square w-full"
            :src="`./birds/${b.name}.webp`"
            :alt="`Drawing of a ${b.name}`"
          />
          <h2 class="font-theme text-2xl font-bold">{{ b.name }}</h2>
          <p class="text-sm">{{ b.category }}</p>
        </RouterLink>
      </div>
    </div>
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

    return {
      result,
      loading,
      error,
    }
  },
}
</script>
