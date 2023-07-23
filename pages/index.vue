<script setup lang="ts">
import { CubeSide } from '@/components/Animation/Cube.vue';
import { PageColor } from 'stores/ColorStore';

definePageMeta({
  colorMode: 'dark'
});

const side = ref<CubeSide>('front');
const colorStore = useColorStore();
const color = computed(() => colorStore.currentColor);

onMounted(() => {
  colorStore.currentColor = 'amber';
});

function updateColor (color: PageColor) {
  colorStore.currentColor = color;
}

</script>

<template>
  <div class="flex container mx-auto gap-32 items-center">
    <div class="flex flex-col gap-4 w-full">
      <NavigationCubeButton :active="side === 'front'" :color="color" @click="side = 'front'">
        Hello there!
      </NavigationCubeButton>
      <NavigationCubeButton :active="side === 'back'" :color="color" @click="side = 'back'">
        Blog
      </NavigationCubeButton>
      <NavigationCubeButton :active="side === 'top'" :color="color" @click="side = 'top'">
        Open Source
      </NavigationCubeButton>
      <NavigationCubeButton :active="side === 'right'" :color="color" @click="side = 'right'">
        Speaking
      </NavigationCubeButton>
      <NavigationCubeButton :active="side === 'left'" :color="color" @click="side = 'left'">
        Game Dev
      </NavigationCubeButton>
      <NavigationCubeButton :active="side === 'bottom'" :color="color" @click="side = 'bottom'">
        Work
      </NavigationCubeButton>
    </div>

    <AnimationCube :side="side" @side-updated="(e) => updateColor(e)">
      <template #front>
        <HomepageIntroduction @open-work="side = 'bottom'" />
      </template>
      <template #top>
        <HomepageOpenSource />
      </template>
      <template #back>
        <HomepageBlog />
      </template>
      <template #right>
        <HomepageSpeaking />
      </template>
    </AnimationCube>
  </div>
</template>
