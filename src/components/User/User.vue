<template>
      <section class="flex gap-4 items-center w-1/4 px-2 justify-end">
       
        <span
          class="bg-black w-10 h-10 rounded-full flex justify-center items-center"
        >
          <img src="/profile.jpeg"  class="text-white rounded-full w-full h-full object-cover" icon="fa-solid fa-user" />
        </span>
        <span class="flex  gap-2 w-2/3 h-full items-center relative">
          <div class="flex flex-col w-full h-full">

            <p>Janet johns</p>
            <p class="text-sm text-gray_text">janetjohns@gmail.com</p>
          </div>
          <FontAwesomeIcon class="text-black" icon="fa-solid fa-caret-down" 
          @click="toggleDropdown()"
          />
          <Dropdown 
          v-if="showDropdown"
          
          class="z-30  text-sm px-4 py-4 top-[95%] rounded-md flex flex-col   gap-2 shadow-2xl bg-white text-left h-[12vh] w-[10vw] absolute max-h-max"
          >
          <p
         
          class="cursor-pointer">

            Logout
          </p>
          </Dropdown>
        </span>
      </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dropdown from "../Dropdown.vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


const showDropdown=ref(false)

const toggleDropdown=()=>{
  showDropdown.value= !showDropdown.value
  console.log('toggle')
}

</script>

<style scoped>

</style>