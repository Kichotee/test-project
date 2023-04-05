<template>
    <button :class="type" @click="e=>{e.preventDefault()}" class="   justify-center items-center hover:scale-90 duration-500 rounded-[30px] inline-flex capitalize">
        <slot/>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  level?: '1' | '2' | '3' | '4';
}>();

const type = computed(() => {
  switch (props.level) {
    case '2':
      return 'px-2 py-1  rounded-full ';
    case '4':
      return ' py-1 text-center   w-[80%] ';
    case '3':
      return 'px-2 py-1 rounded-lg text-sm';
    case '1':
    default:
      return 'px-2 py-1 rounded-lg  text-xl';
  }
});
</script>

<style scoped>

</style>