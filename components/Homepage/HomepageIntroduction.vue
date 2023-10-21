<template>
  <section class="p-12 text-amber-50 container mx-auto max-w-6xl">
    <h2 class="text-4xl font-heading">
      Ahoy!
    </h2>

    <div class="flex space-x-10 mt-4 text-lg">
      <div class="space-y-8 [text-wrap:balance]">
        <p>
          Hello! I'm Jordan, a software developer from Germany. My interest in computers and programming began when I
          was just 8 years old. I started by learning the basics of HTML and CSS, and soon found myself delving into
          more complex languages such as Javascript and PHP.
        </p>

        <p>
          Fast forward to today, and I'm grateful to have turned my hobby into a fulfilling career. I currently hold the
          position of Head of Development Frontend at basecom, where I continue to learn and grow in my professional
          journey.
          <LayoutLink to="https://basecom.de" target="_blank">Learn more</LayoutLink>
        </p>

        <p>
          In my spare time, I love unwinding with video games, diving into board games with friends, participating in
          open-source projects, and occasionally penning a blog post. When I'm not immersed in these activities, you can
          often catch me enjoying cocktails or a cold beer with my buddies.
        </p>
      </div>

      <div class="ml-3 select-none">
        <AnimationPulsatingCircle :size="350" :inner-size="330">
          <img src="https://placehold.it/140x140" alt="Jordan Kniest" class="rounded-full inner-circle">
        </AnimationPulsatingCircle>

        <div class="text-center mt-6">
          <LayoutLink to="https://x.com/@j_kniest" target="_blank">Follow me on Twitter / X</LayoutLink>
        </div>
      </div>
    </div>
  </section>
</template>
