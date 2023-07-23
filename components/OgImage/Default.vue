<script setup lang="ts">
defineOptions({ inheritAttr: false });

defineProps<{
    title: String,
    description: String,
}>();
</script>

<template>
    <div class="w-full bg-amber-600 p-12 text-2xl h-full flex flex-col text-white items-center justify-center">
        <h1>
            {{ title }}
        </h1>
        <h2>
            {{description}}
        </h2>
    </div>
</template>

<style scoped>
h2 {
    font-family: Monserat;
}
</style>
