<template>
    
    <div  class="">
       


            <slot >
    
            </slot>
            
        </div>
    
</template>

<script setup lang="ts">
const props= defineProps(['dropdownContent'])
const content= props.dropdownContent
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>