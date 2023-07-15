<script setup lang="ts">
const queryBuilder = queryContent('blog')
  .limit(3)
  .only(['title', 'description', '_path', '_id', 'tag'])
  .sort({ publishDate: -1 });

const { data } = await useAsyncData('newest-posts', () => queryBuilder.find());
</script>

<template>
  <div class="p-12">
    <h2 class="text-4xl font-heading">
      Newest Blog Posts
    </h2>

    <div class="mt-4 space-y-4">
      <BlogPreview v-for="post in data" :key="post._id" :post="post" />
    </div>

    <div class="text-center m-6">
      <NuxtLink to="/blog" class="bg-emerald-700 p-4 text-emerald-50 rounded-lg">
        Find all my blog posts
      </NuxtLink>
    </div>
  </div>
</template>
