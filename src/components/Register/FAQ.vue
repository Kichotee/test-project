<template>
  <div class="h-full pt-[5%] max-h-max w-full">
    <form class="grid grid-rows-5 grid-cols-2 w-full h-full gap-6">
      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Full name </label>
        <input
          class="border-gray_two bg-gray focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm"
          type="text"
          placeholder="Enter full name"
        />
      </fieldset>

      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Email Address </label>
        <input
          class="border-gray bg-gray focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm"
          type="text"
          placeholder="Enter Admin email"
        />
      </fieldset>

      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Password </label>
        <input
          class=" bg-gray focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm border-gray_text"
          type="tel"
          placeholder="Enter Admin first name"
        />
      </fieldset>
      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Confirm Password </label>
        <input
          class="border-gray bg-gray focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm"
          type="text"
          placeholder="Enter Admin last name"
        />
      </fieldset>

      <div class="col-span-2 mt-4">
        <Button
          @click="handleSubmit()"
          class="relative max-h-14 h-14 text-white bg-charcoal w-full "
          w-full
        >
          <p>Next</p>
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            class="absolute right-2 text-sm"
          />
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from "../button/Button.vue";

const handleSubmit = async () => {};
</script>

<style scoped>

.gradient {
  background: radial-gradient(
    ellipse at center,
    rgba(255,255,255,0.3) 0%,
    rgba(255,255,255,0) 70%,
    rgba(0,0,0,0.5) 90%
  );
  background-blend-mode: multiply;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
  text-shadow: 1px 1px 1px #000;
}
</style>
