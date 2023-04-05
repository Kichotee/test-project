<template>
  <div class="w-full min-h-full h-full max-h-[58rem]">
    <Sidebar></Sidebar>
    <div class="ml-[20vw] pt-10 h-full px-12 flex flex-col gap-2  w-[80vw]">
      
      <div class="w-full h-[3rem] items-center flex mb-8  flex-row justify-between">

        <Search />
        <Calendar />
        <div class=" border-r border-gray  border-l px-2">
          <span class="w-10 h-10 flex border border-gray_text rounded-full justify-center items-center">

            <font-awesome-icon icon="fa-solid fa-bell" class="text-[20px] px-4   h-6 w-6  text-gray_text" />
          </span>
        </div>

        <User class="" />
      </div>
      <div class="w-[75%] mt-4  rounded-md flex h-[8%] justify-between">

        <button
          class="text-black w-1/4 h-full rounded-md"
          v-for="(data, index) in registerData" :key="index"
          @click="changeIndex(index)"
          :class="activeIndex === index ? 'bg-brown text-gray' : ''"
        >
          <p class="text-base tracking-wide ">{{ data.text }}</p>
        </button>
      </div>
        <!-- <div class="h-[1%] w-[40%]"></div> -->
        
        <div class="w-[50%] h-2/3 pb-4 mt-[4rem]">
        <div  class=" w-[8rem] h-[8rem] bg-black rounded-full">
          <img src="/profile.jpeg" class="w-full object-cover h-full rounded-full" alt="">
        </div>
        <KeepAlive>
          <component
            :nextPage="forwardPage"
            class="w-full h-full"
            :is="registerPages[activeIndex]"
            @next-page="(n)=> activeIndex=n"
            @prev-page="(n)=> activeIndex=n"
            account="true"
          >
          </component>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Calendar from '../components/calendar/Calendar.vue'
import Search from '../components/Search.vue'

import Sidebar from '../components/Sidebar.vue'
import User from '../components/User/User.vue'
import Kyc from "../components/Register/KYC.vue";
import channels from "../components/Register/Channels.vue";
import Faq from "../components/Register/FAQ.vue";
import { ref } from "vue";


const registerPages = [Kyc, channels, Faq];

const registerData = [
{
text: "Profile Settings",
},
{
text: "Notification preferences",
},
{
text: "Sign in options",
},
{
text: "Test management",
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
