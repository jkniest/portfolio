<script lang="ts" setup>
const emits = defineEmits<{
    (e: 'open-work'): void;
}>();

const openWork = () => emits('open-work');
</script>

<template>
    <div class="p-12">
        <h2 class="text-4xl font-heading">Ahoy!</h2>

        <div class="flex mt-4">
            <p class="text-lg">
                Hello! I'm Jordan, a software developer from Germany. My interest in computers and programming began when I
                was just 8 years old. I started by learning the basics of HTML and CSS, and soon found myself delving into
                more complex languages such as Javascript and PHP.
            </p>

            <div class="ml-3">
                <AnimationPulsatingCircle :size="150" :inner-size="140">
                    <img src="https://placehold.it/140x140" alt="Jordan Kniest" class="rounded-full inner-circle">
                </AnimationPulsatingCircle>
            </div>
        </div>

        <p class="text-lg mt-8">
            Fast forward to today, and I'm grateful to have turned my hobby into a fulfilling career. I currently hold the
            position of Head of Development at basecom, where I continue to learn and grow in my professional journey. <a
                href="#" @click.prevent="openWork" class="text-sky-600 border-b border-sky-600">Learn more</a>
        </p>

        <p class="text-lg mt-8">
            During my downtime, I like to kick back with some video games, tinker with my own game creations, contribute to
            open-source projects, and sometimes write a blog post or two. When I'm not doing any of that, you'll probably
            find me chilling with friends over a cocktail or a cold beer.
        </p>

        <div class="text-right">
            <a href="https://twitter.com/@j_kniest" class="text-sky-600 border-b border-sky-600" target="_blank">Follow me on Twitter</a>
        </div>
</div></template>