<template>
  <div class="dark:bg-gray-800 bg-gray-100 min-h-screen w-full">
    <AnimationParticleCanvas />

    <NavigationHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
