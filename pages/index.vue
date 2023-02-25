<template>
    <main class="p-10">
        <h1 class="text-3xl">jkniest.de</h1>

        <NuxtLink :to="{ path: '/blog/shopware6/create-offer-plugin/01-preparations' }" class="text-blue-600 block mt-3">
            Example Blog Post
        </NuxtLink>
    </main>
</template>

<style lang="postcss">
h1 {
    @apply font-heading;
    font-weight: bold;
}

body {
    @apply font-content;
}
</style>