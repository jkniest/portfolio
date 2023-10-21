<script setup lang="ts">
defineProps<{
  to: string
}>();
</script>

<template>
  <NuxtLink :to="to" class="text-sky-200 border-b border-sky-200"><slot /></NuxtLink>
</template>
