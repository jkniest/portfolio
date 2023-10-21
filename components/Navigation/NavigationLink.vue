<script setup lang="ts">
const props = withDefaults(defineProps<{
    path: string;
    color?: string | null;
}>(), {
    color: null
});

const isActive = computed(() => {
    return useRoute().path === props.path;
});

const borderActiveColors = computed(() => {
    if(props.color === null) {
        return 'border-amber-600 dark:border-amber-200';
    }

    return `border-${props.color}-200`;
});

const borderInactiveColors = computed(() => {
    if(props.color === null) {
        return 'border-transparent hover:border-amber-600 hover:dark:border-amber-200';
    }

    return `border-transparent hover:border-${props.color}-200`;
});

/**
 * text-amber-200 border-amber-200 hover:border-amber-200
 */
</script>

<template>
    <li :class="(isActive ? borderActiveColors : borderInactiveColors) + ` border-[5px] rounded-drawn transition-all`">
        <NuxtLink :to="path" class="p-2.5 block">
            <slot />
        </NuxtLink>
    </li>
</template>
