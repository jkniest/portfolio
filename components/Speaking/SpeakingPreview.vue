<script setup lang="ts">
function open (): void {
  useRouter().push({ path: '' });
}
</script>

<template>
  <div
      class="p-4 border-4 rounded-drawn border-indigo-400 hover:border-indigo-600 cursor-pointer hover:bg-indigo-300"
      @click="open"
  >
    <header>
      <strong>Speaking Title</strong>
      <p class="text-sm italic">at cool location</p>
    </header>
    <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at, cum ea est eum eveniet
      harum.</p>

    <hr class="my-3 border-indigo-500">

    <div class="flex justify-between">
      <div class="rounded-full px-4 py-1 text-xs flex items-center bg-indigo-100">PHP</div>

      <a class="text-indigo-600 border-b border-indigo-600" @click.prevent="open">Check it out</a>
    </div>
  </div>
</template>
