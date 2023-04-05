<template>

    <div class="w-[45%] mx-auto rounded-md flex h-12 justify-between">
        <button
          class="text-black w-[2rem] h-[2rem] rounded-full"
          v-for="(data, index) in registerData" :key="index"
          @click="changeIndex(index)"
          :class="activeIndex === index ? 'bg-brown text-gray' : ''"
        >
          <p class="text-sm">{{ data.text }}</p>
        </button>
        <!-- <div class="h-[1%] w-[40%]"></div> -->
      </div>
      <div class="w-[45%] h-[34rem] mx-auto mt-[0.8rem]">
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
   
</template>


<script setup lang="ts">
import Kyc from "../components/Register/KYC.vue";
import channels from "../components/Register/Channels.vue";
import Faq from "../components/Register/FAQ.vue";
import { ref } from "vue";


const registerPages = [Kyc, channels, Faq];

const registerData = [
{
text: "1",
},
{
text: "2",
},
{
text: "3",
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