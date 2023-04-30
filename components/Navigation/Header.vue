<script setup lang="ts">
withDefaults(defineProps<{
    title?: string;
    subtitle?: string;
}>(), {
    title: 'Hi, I\'m Jordan!',
    subtitle: 'Software Developer from germany'
});
</script>

<template>
    <header class="text-amber-600 dark:text-amber-200 p-12 flex items-center">
        <AnimationPulsatingCircle class="view-transition-[header-avatar]">
            <img src="https://placehold.it/70x70" class="inner-circle" />
        </AnimationPulsatingCircle>
        <div class="ml-5">
            <h1 class="text-4xl font-heading view-transition-[header-title]" v-text="title" />
            <p class="view-transition-[header-subtitle]" v-text="subtitle" />
        </div>
        <ul class="flex items-center gap-2 view-transition-[header-nav] ml-auto">
            <NavigationLink path="/">Home</NavigationLink>
            <NavigationLink path="/blog">Blog</NavigationLink>
            <NavigationLink path="/speaking">Speaking</NavigationLink>
            <NavigationLink path="/game-dev">Game Dev</NavigationLink>
        </ul>
    </header>
</template>
