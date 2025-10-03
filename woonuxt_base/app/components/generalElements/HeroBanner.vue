<template>
  <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="mx-auto object-cover w-[1440px] h-[420px] lg:h-[560px] xl:h-[690px]"
      src="/images/window-supply-direct-home-hero.webp"
      alt="Window Supply Direct Home Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container mx-auto text-white absolute inset-0 flex flex-col items-start justify-center px-4 md:px-8">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl lg:w-1/2">
        UK's Most Trusted Online Window & Door Specialist
      </h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl lg:w-1/2">
        A-Rated Energy Efficiency | 10-Year Guarantee | Expert Installation
      </h2>
      <div class="mb-8 text-md font-light lg:max-w-none lg:w-1/2 text-balance">
        <p>
          Shop all our products including our new Tilt and Turn Windows
        </p>
      </div>
      <NuxtLink
        to="/products"
        class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-900 lg:w-1/2 text-center"
      >
        Shop now
      </NuxtLink>
    </div>
  </div>
</template>
