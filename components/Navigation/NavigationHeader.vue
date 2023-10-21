<script setup lang="ts">
withDefaults(defineProps<{
    title?: string;
    subtitle?: string;
}>(), {
  title: 'Hi, I\'m Jordan!',
  subtitle: 'Software Developer from germany'
});

const colorStore = useColorStore();
const color = computed(() => colorStore.currentColor);
</script>

<template>
  <header :class="(color ? `text-${color}-200` : 'text-amber-600 dark:text-amber-200') + ` p-12 flex items-center transition-colors`">
    <AnimationPulsatingCircle class="view-transition-[header-avatar]" :color="color">
      <img src="https://placehold.it/70x70" class="inner-circle">
    </AnimationPulsatingCircle>
    <div class="ml-5">
      <h1 class="text-4xl font-heading view-transition-[header-title]" v-text="title" />
      <p class="view-transition-[header-subtitle]" v-text="subtitle" />
    </div>
    <ul class="flex items-center gap-2 view-transition-[header-nav] ml-auto">
      <NavigationLink :color="color" path="/">
        Home
      </NavigationLink>
      <NavigationLink :color="color" path="/blog">
        Blog
      </NavigationLink>
      <NavigationLink :color="color" path="/open-source">
        Open Source
      </NavigationLink>
      <NavigationLink :color="color" path="/speaking">
        Speaking
      </NavigationLink>
      <NavigationLink :color="color" path="/game-dev">
        Game Dev
      </NavigationLink>
    </ul>
  </header>
</template>
