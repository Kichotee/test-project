<template>
  <div
    class="overflow-auto pb-4 gap-10 w-full h-full flex flex-col pt-10 pl-12 pr-8"
  >
    <div class="h-4/5 pt-[2rem] relative  w-full flex flex-col">
      <div class="h-[6rem] mb-[3rem] w-1/2  flex flex-row justify-between">
        <RouterLink to="/" class="flex h-8 items-center gap-2">
          <FontAwesomeIcon icon="fa-solid   fa-arrow-left"/>
          Back
        </RouterLink>
        <div class="  h-full w-[45%] flex gap-4 flex-col">
          <h1 class="text-3xl">Join Us Today</h1>
          <p class="text-gray_text">
            Please start out buy filling out these forms for us
          </p>
        </div>
      </div>
      <div class="w-[45%] mx-auto rounded-md flex h-12 justify-between">
        <button
          class="text-black w-1/3"
          v-for="(data, index) in registerData" :key="index"
          @click="changeIndex(index)"
        >
        <div class=" flex  items-center w-full">

          <p class="text-sm w-[2rem] flex  justify-center items-center h-[2rem] rounded-full"
          :class="activeIndex === index ? 'bg-brown text-gray' : 'bg-gray'"
          >{{ data.text }}</p>
          <p class="w-[calc(100%-2rem)] h-1 border-t border-gray_text border-dashed"></p>
        </div>

          <p class="text-sm  text-left text-gray_text">
            {{ data.heading }}
          </p>
        </button>
        <!-- <div class="h-[1%] w-[40%]"></div> -->
      </div>
      <div class="w-[45%] h-[30rem] relative mx-auto mt-[0.8rem]">
        <KeepAlive>
          <component
            :nextPage="forwardPage"
            class="w-full h-full"
            :is="registerPages[activeIndex]"
            @next-page="(n)=> activeIndex=n"
            @prev-page="(n)=> activeIndex=n"
          >
          </component>
        </KeepAlive>
        
      </div>
      <img src="/headset.png" class="w-48 h-48 -rotate-45 top-[70%] right-0 absolute" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import Kyc from "../components/Register/KYC.vue";
import Faq from "../components/Register/FAQ.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const registerPages = [Kyc, Kyc, Faq];

const registerData = [
  {
    text: "1",
    heading:'Personal information'
  },
  {
    text: "2",
  heading:'Subscription phase'
},
  {
    text: "3",
heading:'Create workspace'
  },
];
const activeIndex = ref(0);

const forwardPage = () => {
  console.log("yes");

  activeIndex.value = 1;
};
const changeIndex = (index) => {
  //   if (activeIndex.value != null && activeIndex.value != index)
  //     activeIndex.value = null;
  activeIndex.value = index;
};
</script>

<style scoped></style>
