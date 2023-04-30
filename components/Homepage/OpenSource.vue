import { HomepageOpenSourceProject } from '../../.nuxt/components';
<template>
    <div class="p-12">
        <h2 class="text-4xl font-heading">My open source work!</h2>

        <p class="text-lg mt-4">
            I've created a few open source libraries and contributed to many more. I'm a big fan of open source software.
            Below you can find a few of my projects:
        </p>

        <div class="mt-4 grid grid-cols-2 gap-4">
            <HomepageOpenSourceProject url="https://github.com/Papple-Registry/papple" name="Papple"
                description="Self-hosted private composer registry with a lot of features." tag-color="bg-emerald-50"
                tag="Full project" />
            <HomepageOpenSourceProject url="https://github.com/jkniest/hue-it" name="hue-it"
                description="An unoffical PHP SDK for the phillips hue API." tag-color="bg-amber-50" tag="PHP" />
            <HomepageOpenSourceProject url="https://github.com/jkniest/nuki-it" name="nuki-it"
                description="Unoffical PHP SDK for the Nuki smartlock API." tag-color="bg-amber-50" tag="PHP" />
            <HomepageOpenSourceProject url="https://github.com/basecom/FixturesPlugin" name="Fixtures Plugin"
                description="Shopware 6 Plugin to pre-generate demo data." tag-color="bg-pink-50" tag="Shopware 6" />
        </div>

        <div class="text-center m-10">
            <a href="https://github.com/jkniest" target="_blank" class="bg-sky-700 p-4 text-sky-50 rounded-lg">
                Find all my projects on github
            </a>
        </div>
    </div>
</template>