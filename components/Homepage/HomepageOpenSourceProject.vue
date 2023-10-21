<script setup lang="ts">
const props = defineProps<{
    url: string;
    name: string;
    description: string;
    tag: string;
    tagColor: string;
}>();

function open() {
    window.open(props.url, '_blank');
}
</script>

<template>
    <div class="p-4 border-4 rounded-drawn border-sky-400 hover:border-sky-600 cursor-pointer hover:bg-sky-300"
        @click="open">
        <strong v-text="name" />
        <p v-text="description" />

        <hr class="my-3 border-sky-500">

        <div class="flex justify-between">
            <div :class="tagColor + ` rounded-full px-4 py-1 text-xs flex items-center`" v-text="tag" />

            <a :href="url" target="_blank" class="text-sky-600 border-b border-sky-600">Check
                it out</a>
        </div>
    </div>
</template>