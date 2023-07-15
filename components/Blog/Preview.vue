<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps<{
  post: Pick<ParsedContent, 'title' | 'description' | '_path' | 'tag'>;
}>();

function open (): void {
  useRouter().push({ path: props.post._path ?? '' });
}
</script>

<template>
  <div
    class="p-4 border-4 rounded-drawn border-emerald-400 hover:border-emerald-600 cursor-pointer hover:bg-emerald-300"
    @click="open"
  >
    <strong v-text="post.title" />
    <p v-text="post.description" />

    <hr class="my-3 border-emerald-500">

    <div class="flex justify-between">
      <div class="rounded-full px-4 py-1 text-xs flex items-center bg-emerald-100" v-text="post.tag" />

      <a class="text-emerald-600 border-b border-emerald-600" @click.prevent="open">Check
        it out</a>
    </div>
  </div>
</template>
