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

/**
 * text-amber-200 border-amber-200 hover:border-amber-200 from-amber-50 via-amber-200 to-amber-500
 */
</script>

<template>
  <header :class="(color ? `text-${color}-200` : 'text-amber-600 dark:text-amber-200') + ` p-3 lg:p-12 flex items-center transition-colors`">
    <AnimationPulsatingCircle class="view-transition-[header-avatar]" :color="color">
      <img src="https://placehold.it/70x70" class="inner-circle" alt="Jordan Kniest">
    </AnimationPulsatingCircle>
    <div class="ml-5 mr-1">
      <h1 class="text-3xl lg:text-4xl font-heading view-transition-[header-title]" v-text="title" />
      <p class="view-transition-[header-subtitle] text-sm lg:text-base" v-text="subtitle" />
    </div>
    <div class="lg:hidden ml-auto">
      <Icon name="ic:round-menu" class="w-10 h-10" />
    </div>
    <ul class="hidden lg:flex items-center gap-2 view-transition-[header-nav] ml-auto">
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
