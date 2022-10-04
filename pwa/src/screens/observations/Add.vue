<template>
  <route-holder title="Add observation">
    <form @submit.prevent="submitForm">
      <header>
        <h2 class="mb-6 text-3xl">Add observation</h2>
      </header>

      <div
        v-if="errorMessage"
        class="mb-3 flex items-center justify-between rounded-md bg-red-100 px-3 py-1"
      >
        <p class="text-sm text-red-600">{{ errorMessage }}</p>

        <button
          @click="errorMessage = ''"
          class="rounded-full p-3 ring-red-600 hover:bg-red-200 focus:outline-none focus:ring-2"
        >
          <X class="h-4 w-4 text-red-600" />
        </button>
      </div>

      <div>
        <label
          class="mb-1 block text-neutral-500 focus-within:text-neutral-900"
          for="name"
        >
          <span class="mb-2 block">Name</span>

          <input
            v-model="observationInput.name"
            id="name"
            class="w-full rounded-md border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
            type="text"
            name="name"
          />
        </label>
      </div>

      <div class="mt-3">
        <label
          class="mb-1 block text-neutral-500 focus-within:text-neutral-900"
          for="birdId"
        >
          <span class="mb-2 block">Bird specie</span>

          <select
            :disabled="loading"
            v-if="result"
            v-model="observationInput.birdId"
            name="birdId"
            id="birdId"
            class="w-full rounded-md border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
          >
            <option value="Pick a bird species" selected disabled>
              Pick a bird species
            </option>
            <option v-for="b of result.birds" :key="b.id" :value="b">
              {{ b.name }}
            </option>
          </select>
        </label>
      </div>

      <!-- LOCATION -->
      <div class="mt-3">
        <label
          class="mb-1 block text-neutral-500 focus-within:text-neutral-900"
          for="locationId"
        >
          <span class="mb-2 block">Location</span>

          <select
            :disabled="loading"
            v-if="result"
            v-model="observationInput.locationId"
            name="locationId"
            id="locationId"
            class="w-full rounded-md border border-neutral-200 px-3 py-1 text-neutral-800 outline-none ring-neutral-300 focus-visible:ring"
          >
            <option value="Pick a location" selected disabled>
              Pick a location
            </option>
            <option v-for="l of result.locations" :key="l.id" :value="l">
              {{ l.name }}
            </option>
          </select>
        </label>
      </div>

      <!-- DESCRIPTION -->

      <!-- WEATHER -->

      <button
        class="mt-6 flex w-full items-center justify-center rounded-md bg-neutral-700 py-2 px-3 text-white outline-none ring-neutral-300 hover:bg-neutral-900 focus-visible:ring"
        :disabled="loading"
      >
        <span v-if="!loading">Add observation</span>
        <div v-else>
          <Loader2 class="animate-spin" />
        </div>
      </button>
    </form>
  </route-holder>
</template>

<script lang="ts">
import { reactive, ref, Ref } from 'vue'
import gql from 'graphql-tag'
import { useRouter } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { Loader2, X } from 'lucide-vue-next'

import RouteHolder from '../../components/holders/RouteHolder.vue'
import useAuthentication from '../../composables/useAuthentication'

export default {
  components: {
    RouteHolder,
    Loader2,
    X,
  },

  setup() {
    const { user } = useAuthentication()
    const { replace } = useRouter()

    const errorMessage: Ref<string> = ref('')

    // TODO: make form
    // Link input values (v-model)
    // Add styling!
    // TODO: validation...

    const BIRDS = gql`
      query birds {
        birds {
          id
          name
        }
      }
    `
    const { result, loading, error } = useQuery(BIRDS)

    const observationInput = reactive({
      name: '',
      birdId: 'Pick a bird species',
      locationId: 'Pick a location',
      description: '',
      weather: '',
      userId: user.value.uid,
    })

    const ADD_OBSERVATION = gql`
      mutation createObservation {
        createObservation(
          createObservationInput: {
            active: true
            birdId: ""
            description: ""
            locationId: ""
            name: ""
            userId: ""
            weather: ""
          }
        ) {
          id
        }
      }
    `

    return {
      observationInput,
      result,
      loading,
      error,
      errorMessage,
    }
  },
}
</script>
