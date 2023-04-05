<template>
  <div class="h-full pt-[5%] max-h-max w-full">
    <form class="grid grid-rows-5 grid-cols-2 w-full h-full gap-6">
      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Full name </label>
        <input
          class="border-gray_text border focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm"
          type="text"
          placeholder="Enter full name"
        />
      </fieldset>

      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Email Address </label>
        <input
          class="border-gray_text border focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm"
          type="text"
          placeholder="Enter Admin email"
        />
      </fieldset>

      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Password </label>
        <input
          class="border-gray_text border focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm border-gray_text"
          type="tel"
          placeholder="Enter Admin first name"
        />
      </fieldset>
      <fieldset class="flex flex-col gap-2 col-span-2">
        <label class="text-sm"> Confirm Password </label>
        <input
          class="border-gray_text border focus:outline-black focus:outline-[1px] pl-8 rounded-md h-2/3 placeholder:font-light placeholder:text-sm"
          type="text"
          placeholder="Enter Admin last name"
        />
      </fieldset>

      <div class="col-span-2 mt-4">
        <Button
          @click="handleSubmit()"
          class="relative max-h-14 h-14 text-white w-full "
          :class="!props.account?'bg-transparent ':'bg-charcoal '"
          w-full
        >
        <div v-if="!props.account" :class="!props.account?'gradient hidden text-sm rounded-lg':''">
        Next
        </div>
          <p v-if="props.account">Next</p>
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

const props=defineProps(['account'])
</script>

<style scoped>
.gradient {
  background: hsla(0, 11%, 95%, 1);

background: radial-gradient(circle, hsla(0, 11%, 95%, 1) 0%, hsla(0, 15%, 70%, 1) 30%, hsla(0, 0%, 0%, 1) 10%);

background: -moz-radial-gradient(circle, hsla(0, 11%, 95%, 1) 0%, hsla(0, 15%, 70%, 1) 30%, hsla(0, 0%, 0%, 1) 100%);

background: -webkit-radial-gradient(circle, hsla(0, 11%, 95%, 1) 0%, hsla(0, 15%, 70%, 1) 30%, hsla(0, 0%, 0%, 1) 100%);
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #121212;
  font-size: 28px;
  
}
</style>
