<template>
  <main class="p-10 h-screen w-screen dark:bg-gray-800 bg-gray-100">
    <h1 class="text-3xl">
      jkniest.de
    </h1>

    <NuxtLink :to="{ path: '/blog/shopware6/create-offer-plugin/01-preparations' }" class="text-blue-600 block mt-3">
      Example Blog Post
    </NuxtLink>

    <NuxtLink :to="{ path: '/speaking' }" class="text-blue-600 block mt-3">
      Speaking
    </NuxtLink>

    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
      <option value="sepia">
        Sepia
      </option>
    </select>
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
