<template>
  <div>
    <aside
      class="bg-gray gap-8 pt-12 text-black left-0 top-0 min-h-screen z-[1005] h-screen max-h-[120vh] flex flex-col fixed w-[20vw] items-cent"
    >
      <div class="w-full h-[4rem] text-brown flex items-center justify-start ml-2 text-2xl font-bold">
        <img
          src="/headset.png
         "
         class="w-12 h-12"
          alt=""
        />
        Agent 47
      </div>
      <div class="w-[98%] ml-2 px-2 py-4 gap-2 items-center flex flex-row bg-charcoal text-white rounded-md h-[5rem]">
        
        <div class="bg-gradient-to-br from-red to-purple h-6 w-6">

        </div>
        
        <div class="w-full h-full flex  justify-center flex-col">

          Agent 47

          <div class="w-full flex h-1/2 gap-1 items-baseline flex-row">
  
              <p>workspace</p>
              <span class="w-1 h-1 bg-white rounded-full"></span>
              <span class="text-brown">Owner</span>
          </div>
        </div>
        
        
      </div>
      <nav class="h-2/3  border-t border-gray_text py-4  w-full flex-grow flex flex-col items-center gap-16">
        <ul class="flex   ml-2 h-full  flex-col  justify-evenly w-full items-center">
          <li
            class="relative cursor-pointer w-full h-[60%]  flex justify-center items-center  "
            v-for="(data, index) in navData" :key="data"
            :class="data.index==2? 'bg-black text-white':''"
          >
            <div
              class="px-2 text-gray_text  items-center text-base w-[12rem] flex flex-row hover:text-charcoal/30 duration-300 justify-center gap-4"
              :class="data.index==1? '':''"
              @click="toggleDropdown(data.index)"
            >
            <FontAwesomeIcon :icon="data.icon"></FontAwesomeIcon>
              <span class="inline-block whitespace-nowrap basis-4/5  col-start-2">
                {{ data.title }}
              </span>
            </div>
          </li>
        </ul>
      </nav>
      <RouterLink to="/signup" class="text-brown w-[12rem] mx-auto  flex justify-center items-center h-14  gap-6">
      <FontAwesomeIcon icon="fa-solid fa-cog"/>
      <p class="basis-4/5 ">

        Logout
      </p>  
      </RouterLink>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import { useRoute } from "vue-router";
// import analysis from '../assets/images/sidebar/analysis.png'
// import candle from '../../assets/images/sidebar/candle.png'
// import message from '../../assets/images/sidebar/message-notif.png'
// import money from '../../assets/images/sidebar/money-3.png'
// import receipt from '../../assets/images/sidebar/receipt.png'
// import smartphone from '../assets/images/sidebar/smartphone.png'
import analysis from '../../public/sidebar/analysis.png'
const route = useRoute()

const navData = [
  {
    title: "Dashboard",

    icon: "fa-solid fa-user",
    index: 1,
  },
  {
    title: "My account",

    icon: "fa-solid fa-briefcase",
    index: 2,
    link: "/",
  },
  {
    title: "Chats",
    icon: "fa-solid fa-credit-card",
    index: 3,
    link: "/payment/index",
  },
  { title: "Team members", icon: "fa-solids fa-briefcase", index: 4 },
  { title: "Widget", icon: "fa-solid fa-briefcase", index: 4 },
  { title: "Integration", icon: "fa-solid fa-briefcase", index: 4 },
  { title: "Subscription Plan", icon: "fa-solid fa-business-time", index: 4 },
];

const currentIndex = ref(null);

const toggleDropdown = (index) => {
  if (currentIndex.value) currentIndex.value = null;
  else currentIndex.value = index;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
