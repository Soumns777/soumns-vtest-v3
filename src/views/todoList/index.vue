<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Calendar, Search } from '@element-plus/icons-vue';
import { $ref } from 'vue/macros';

const input2 = $ref(0);
</script>

<template>
  <div>
    <el-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Input something"
      :prefix-icon="Search"
      clearable
    />
  </div>
</template>

<style scoped lang="scss"></style>
