<script setup lang="ts">
const queryBuilder = queryContent('speaking')
  .limit(2)
  .only(['title', 'description', '_path', '_id', 'tag', 'location'])
  .sort({ publishDate: -1 });

const { data } = await useAsyncData('newest-speaking-gigs', () => queryBuilder.find());
</script>

<template>
  <div class="p-12">
    <h2 class="text-4xl font-heading">
      Speaking
    </h2>

    <p class="mt-3">
      In my carrer I've held a few talks in smaller user groups or company events. Some of them are available
      publically
      and you can find them below. Please note that most of my talks are in german.
    </p>

    <div class="mt-4 space-y-4">
      <SpeakingPreview v-for="talk in data" :key="talk._id" :talk="talk" />
    </div>

    <div class="text-center m-10">
      <NuxtLink to="/speaking" class="bg-indigo-700 p-4 text-emerald-50 rounded-lg">
        Find all my talks
      </NuxtLink>
    </div>
  </div>
</template>
