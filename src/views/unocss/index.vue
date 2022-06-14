<script lang="ts" setup>
import { constants } from 'buffer';
import { reactive, ref } from 'vue';

const change = (): void => {
  console.log('💙💛');
};
</script>

<template>
  <div>
    <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
      @click="change()"
    >
      Click me
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
