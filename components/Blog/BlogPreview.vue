<script setup lang="ts">
function open (): void {
  useRouter().push({ path: '' });
}
</script>

<template>
  <div
      class="p-4 border-4 rounded-drawn border-emerald-400 hover:border-emerald-600 cursor-pointer hover:bg-emerald-300"
      @click="open"
  >
    <strong>My blog post</strong>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laborum, odit! Ducimus ex fugit.</p>

    <hr class="my-3 border-emerald-500">

    <div class="flex justify-between">
      <div class="rounded-full px-4 py-1 text-xs flex items-center bg-emerald-100">
        PHP
      </div>

      <a class="text-emerald-600 border-b border-emerald-600" @click.prevent="open">Check it out</a>
    </div>
  </div>
</template>
