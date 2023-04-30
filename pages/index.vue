<script setup lang="ts">
import { CubeSide } from '@/components/Animation/Cube.vue';

definePageMeta({
  colorMode: 'dark'
});

const color = ref<string | null>(null);
const side = ref<CubeSide>('front');
</script>

<template>
  <div>
    <NavigationHeader :color="color" />

    <main>
      <div class="flex gap-2">
        <button class="bg-pink-50 p-4" @click="side = 'front'">
          intro
        </button>
        <button class="bg-pink-50 p-4" @click="side = 'top'">
          open source
        </button>
        <button class="bg-pink-50 p-4" @click="side = 'back'">
          Blog
        </button>
        <button class="bg-pink-50 p-4" @click="side = 'right'">
          Speaking
        </button>
        <button class="bg-pink-50 p-4" @click="side = 'left'">
          Game Dev
        </button>
        <button class="bg-pink-50 p-4" @click="side = 'bottom'">
          Work
        </button>
      </div>

      <AnimationCube :side="side" @side-updated="(e) => color = e" />
    </main>
  </div>
</template>
