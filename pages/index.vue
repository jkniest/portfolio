<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
});

const colorStore = useColorStore();

onMounted(() => {
  colorStore.currentColor = 'amber';
});

</script>

<template>
  <HomepageIntroduction />

  <div class="flex flex-col container mx-auto gap-8 items-center">
    <HomepageOpenSource />

    <HomepageSpeaking />
  </div>
</template>
