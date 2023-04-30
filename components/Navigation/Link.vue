<script setup lang="ts">
const props = defineProps<{
    path: string;
}>();

const isActive = computed(() => {
    return useRoute().path === props.path;
});
</script>

<template>
    <li class="border-[5px] rounded-drawn transition-all" :class="{ 'border-amber-600 dark:border-amber-200': isActive, 'border-transparent hover:border-amber-600 hover:dark:border-amber-200': !isActive }">
        <NuxtLink :to="path" class="p-2.5 block">
            <slot />
        </NuxtLink>
    </li>
</template>