<template>
  <router-view
    class="@dark:bg-neutral-800 @dark:text-neutral-50 min-h-screen bg-neutral-50"
  ></router-view>
</template>

<script lang="ts">
import { provide } from '@vue/runtime-core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import useGraphQL from './composables/useGraphQL'
import useCustomUser from './composables/useCustomUser'
import useAuthentication from './composables/useAuthentication'

export default {
  setup() {
    const { user } = useAuthentication()
    const { apolloClient } = useGraphQL()
    const { loadCustomUser } = useCustomUser()

    provide(DefaultApolloClient, apolloClient)

    if (user.value) loadCustomUser(user.value.uid)

    return {}
  },
}
</script>