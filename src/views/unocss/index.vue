<script lang="ts" setup>
const change = (): void => {
  console.log('💙💛');
};

const click = $ref('click');
</script>

<template>
  <div>
    <!-- unocss 正常写法 -->
    <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
    >
      click me
    </button>

    <!-- unocss 写法扩展,根据一致的样式类型进行分类 -->
    <button
      p="x4 y2"
      m="2"
      hover="bg-green-700"
      bg="green-500"
      text="white"
      border="none"
      rounded="lg"
      font="semibold"
      shadow="md"
      @click="change()"
    >
      {{ click }}
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
