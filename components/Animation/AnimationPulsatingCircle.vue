<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: number;
  innerSize?: number;
  color?: string | null;
}>(), {
  size: 70,
  innerSize: 60,
  color: null
});

const sizeInPx = computed(() => `${props.size}px`);
const innerSizeInPx = computed(() => `${props.innerSize}px`);
</script>

<template>
  <div :class="`relative rounded-full outer-circle`">
    <slot class="inner-circle"/>
    <span
        :class="(color ? `from-${color}-50 via-${color}-200 to-${color}-500` : 'dark:from-amber-50 from-amber-400 dark:via-amber-200 via-amber-200 dark:to-amber-500 to-amber-600') + ` absolute rounded-full bg-gradient-to-b blur-md transition-all`"
    />
    <span
        :class="(color ? `from-${color}-50 via-${color}-200 to-${color}-500` : 'dark:from-amber-50 from-amber-400 dark:via-amber-200 via-amber-200 dark:to-amber-500 to-amber-600') + ` absolute rounded-full bg-gradient-to-b blur-xl transition-all`"
    />
    <span
        :class="(color ? `from-${color}-50 via-${color}-200 to-${color}-500` : 'dark:from-amber-50 from-amber-400 dark:via-amber-200 via-amber-200 dark:to-amber-500 to-amber-600') + ` absolute rounded-full bg-gradient-to-b blur-3xl transition-all`"
    />
    <span
        :class="(color ? `from-${color}-50 via-${color}-200 to-${color}-500` : 'dark:from-amber-50 from-amber-400 dark:via-amber-200 via-amber-200 dark:to-amber-500 to-amber-600') + ` absolute rounded-full bg-gradient-to-b transition-all`"
    />
  </div>
</template>

<style scoped>
.outer-circle {
  width: v-bind(sizeInPx);
  height: v-bind(sizeInPx);
  animation: rotate 1.5s linear infinite;
}

.outer-circle span {
  height: v-bind(sizeInPx);
  width: v-bind(sizeInPx);
}

:deep(.inner-circle) {
  width: v-bind(innerSizeInPx);
  height: v-bind(innerSizeInPx);
  position: absolute;
  top: calc((v-bind(sizeInPx) - v-bind(innerSizeInPx)) / 2);
  left: calc((v-bind(sizeInPx) - v-bind(innerSizeInPx)) / 2);
  border-radius: 50%;
  z-index: 9;
}

@keyframes rotate {
  0% {
    filter: hue-rotate(0deg)
  }

  50% {
    filter: hue-rotate(20deg)
  }

  100% {
    filter: hue-rotate(0deg)
  }
}
</style>
