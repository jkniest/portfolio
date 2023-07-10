<script setup lang="ts">
export type CubeSide = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom';

const props = withDefaults(defineProps<{
    size?: number;
    side?: CubeSide;
}>(), {
  size: 650,
  side: 'front'
});

const emits = defineEmits<{
    (e: 'side-updated', color: string): void;
}>();

const sizeInPx = computed(() => `${props.size}px`);

watch(() => props.side, (side) => {
  const color = {
    front: 'amber',
    top: 'sky',
    back: 'emerald',
    right: 'violet',
    left: 'rose',
    bottom: 'slate'
  }[props.side] ?? 'text-white';

  emits('side-updated', color);
});

/**
 * text-amber-200 from-amber-50 via-amber-200 to-amber-500 border-amber-200 hover:border-amber-200
 * text-sky-200 from-sky-50 via-sky-200 to-sky-500 border-sky-200 hover:border-sky-200
 * text-emerald-200 from-emerald-50 via-emerald-200 to-emerald-500 border-emerald-200 hover:border-emerald-200
 * text-violet-200 from-violet-50 via-violet-200 to-violet-500 border-violet-200 hover:border-violet-200
 * text-rose-200 from-rose-50 via-rose-200 to-rose-500 border-rose-200 hover:border-rose-200
 * text-slate-200 from-slate-50 via-slate-200 to-slate-500 border-slate-200 hover:border-slate-200
 */

</script>

<template>
  <div class="grid place-items-center mt-24">
    <div :class="`scene active-${side}`">
      <div :class="`cube w-full h-full relative transition-transform duration-1000 show-${side}`">
        <div class="cube__face cube__face--front bg-amber-200 bg-opacity-90">
          <slot name="front" />
        </div>
        <div class="cube__face cube__face--back bg-emerald-200 bg-opacity-90">
          <slot name="back" />
        </div>
        <div class="cube__face cube__face--right bg-violet-200 bg-opacity-90">
          Speaking
        </div>
        <div class="cube__face cube__face--left bg-rose-200 bg-opacity-90">
          GameDev
        </div>
        <div class="cube__face cube__face--top bg-sky-200 bg-opacity-90">
          <slot name="top" />
        </div>
        <div class="cube__face cube__face--bottom bg-slate-200 bg-opacity-90">
          Work
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*******************
|   Fixed values   |
*******************/
.scene {
    width: v-bind(sizeInPx);
    height: v-bind(sizeInPx);
    perspective: calc(v-bind(sizeInPx) * 3);
}

.cube {
    transform-style: preserve-3d;
}

.scene:before,
.scene:after {
    content: '';
    position: absolute;
    left: 50px;
    top: 50px;
    content: '';
    background-size: 50%;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    z-index: -1;
}

.scene:after {
    filter: blur(120px);
}

.cube.show-front {
    transform: translateZ(calc(v-bind(sizeInPx) / -2));
}

.cube.show-right {
    transform: translateZ(calc(v-bind(sizeInPx) / -2)) rotateY(-90deg);
}

.cube.show-back {
    transform: translateZ(calc(v-bind(sizeInPx) / -2)) rotateY(-180deg);
}

.cube.show-left {
    transform: translateZ(calc(v-bind(sizeInPx) / -2)) rotateY(90deg);
}

.cube.show-top {
    transform: translateZ(calc(v-bind(sizeInPx) / -2)) rotateX(-90deg);
}

.cube.show-bottom {
    transform: translateZ(calc(v-bind(sizeInPx) / -2)) rotateX(90deg);
}

.cube__face {
    position: absolute;
    width: v-bind(sizeInPx);
    height: v-bind(sizeInPx);

    transform: perspective(calc(v-bind(sizeInPx) * 2.5)) translateZ(250px);
}

.cube__face--front {
    transform: rotateY(0deg) translateZ(calc(v-bind(sizeInPx) / 2));
}

.cube__face--back {
    transform: rotateY(180deg) translateZ(calc(v-bind(sizeInPx) / 2));
}

.cube__face--top {
    transform: rotateX(90deg) translateZ(calc(v-bind(sizeInPx) / 2));
}

.cube__face--right {
    transform: rotateY(90deg) translateZ(calc(v-bind(sizeInPx) / 2));
}

.cube__face--left {
    transform: rotateY(-90deg) translateZ(calc(v-bind(sizeInPx) / 2));
}

.cube__face--bottom {
    transform: rotateX(-90deg) translateZ(calc(v-bind(sizeInPx) / 2));
}

/*******************
|      Front       |
*******************/
.scene.active-front:before,
.scene.active-front:after {
    /** 100 400 700 */
    background: linear-gradient(0deg, #fef9c3, #facc15, #a16207);
}

/*******************
|       Top        |
*******************/
.scene.active-top:before,
.scene.active-top:after {
    /** 100 400 700 */
    background: linear-gradient(0deg, #e0f2fe, #38bdf8, #0369a1);
}

/*******************
|       Back       |
*******************/
.scene.active-back:before,
.scene.active-back:after {
    /** 100 400 700 */
    background: linear-gradient(0deg, #d1fae5, #34d399, #047857);
}

/*******************
|      Right       |
*******************/
.scene.active-right:before,
.scene.active-right:after {
    /** 100 400 700 */
    background: linear-gradient(0deg, #ede9fe, #a78bfa, #6d28d9);
}

/*******************
|       Left       |
*******************/
.scene.active-left:before,
.scene.active-left:after {
    /** 100 400 700 */
    background: linear-gradient(0deg, #ffe4e6, #fb7185, #be123c);
}

/*******************
|      Bottom      |
*******************/
.scene.active-bottom:before,
.scene.active-bottom:after {
    /** 100 400 700 */
    background: linear-gradient(0deg, #f1f5f9, #94a3b8, #334155);
}
</style>
