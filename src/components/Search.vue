<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    class="bg-white group h-full max-w-full place-items-center overflow-hidden grid-cols-3 relative rounded-full text-gray-500 w-12 md:h-12 md:min-w-[300px] md:rounded text-[#606060]"
  >
    <!-- <span class=" hidden md:inline ">Search</span> -->
    <!-- <font-awesome-icon
      icon="fa-solid fa-search"
      class="w-4 absolute text-gray_text right-4 top-1/2 -translate-y-1/2"
      v-if="searchText==''"
    /> -->
    <font-awesome-icon icon="fa-solid fa-search" class="text-[24px] px-4  text-gray_text absolute right-4 top-1/2 -translate-y-1/2"
       />
    <input
      placeholder="search"
      @input="$emit('update:searchData', $event.target?.value)"
      type="search"
      @keypress.enter="searchValue"
      v-model="searchText"
      class="h-full focus: w-full pl-4 border-none outline-none placeholder:text-sm"
    />

    <span class="md:right-6 md:translate-x-0"> </span>
  </button>
  
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props=defineProps(['searchData'])

const emits = defineEmits(["update:searchData"]);
const searchValue=()=>{emits('update:searchData', props.searchData)}
</script>

<style scoped></style>
