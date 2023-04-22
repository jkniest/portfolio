<template>
    <main class="p-10 h-screen w-screen dark:bg-gray-800 bg-gray-100">
        <h1 class="text-3xl ml-5">Speaking</h1>

        <NuxtLink :to="{ path: '/' }" class="text-blue-600 block mt-3">
            Go back
        </NuxtLink>
    </main>
</template>

<style lang="postcss">
h1 {
    @apply font-heading;
    font-weight: bold;
    view-transition-name: title;
}

body {
    @apply font-content;
}
</style>