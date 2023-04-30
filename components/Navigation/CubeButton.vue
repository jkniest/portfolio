<script setup lang="ts">
withDefaults(defineProps<{
    color?: string|null;
    active?: boolean;
}>(), {
    color: null,
    active: false
});
</script>

<template>
    <button :class=" (active && color ? `bg-${color}-200` : 'bg-gray-600 text-gray-50') + ` p-4 transition-colors rounded-md`">
        <slot />
    </button>
</template>