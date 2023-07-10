<script setup lang="ts">
const queryBuilder = queryContent('blog')
  .limit(3)
  .only(['title', 'description', '_path', 'id'])
  .sort({ publishDate: -1 });

const { data } = await useAsyncData('newest-posts', () => queryBuilder.find());
</script>

<template>
  <div class="p-12">
    <h2 class="text-4xl font-heading">
      Newest Blog Posts
    </h2>

    <div class="mt-4 space-y-4">
      <BlogPreview v-for="post in data" :key="post.id" />
    </div>

    <div class="text-center m-10">
      <NuxtLink to="/blog" class="bg-sky-700 p-4 text-sky-50 rounded-lg">
        Find all my blog posts
      </NuxtLink>
    </div>
  </div>
</template>
