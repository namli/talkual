<template>
    <div class="max-w-5xl mx-auto mt-5 px-5">


        <NuxtLink class="flex items-center justify-center space-x-2 bg-green-500 text-white rounded-lg py-2 px-3 text-lg"
            v-if="status !== 'authenticated'" to="/auth/signIn">

            <i class="fa fa-right-to-bracket pt-0.5" />
            <span>Login</span>
        </NuxtLink>
        <NuxtLink v-else
            class="flex items-center justify-center mt-2 space-x-2 bg-red-500 text-white rounded-lg py-2 px-3 text-lg"
            @click="signOut({ callbackUrl: '/auth/signIn' })">
            <span>Logout</span>
        </NuxtLink>
    </div>
</template>
  
<script lang="ts" setup>
import { useSession } from '#imports'
const { data, status, getCsrfToken, getProviders, signOut } = await useSession({ required: false })
const providers = await getProviders()
const csrfToken = await getCsrfToken()
</script>
  
<style scoped>
pre {
    @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
    @apply text-green-400;
}
</style>
  