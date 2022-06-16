<script lang="ts" setup>
import { Calendar, Search, Delete } from '@element-plus/icons-vue';
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus';

import useUser from '@/store/modules/login';
const store = useUser();
const { tid, todoList } = storeToRefs(store);
let input2 = $ref('');

const changeInp = (): void => {
  store.addTodo(input2);
  input2 = '';
  console.log(tid, todoList, '💙💛');
};

const delTodo = (id: number): void => {
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      center: true,
    }
  )
    .then(() => {
      store.deleteTodo(id);

      ElMessage({
        type: 'success',
        message: 'Delete completed',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      });
    });
};
</script>

<template>
  <div class="container">
    <div w="400px">
      <el-input
        v-model="input2"
        w="50"
        m="2"
        placeholder="Input something"
        :prefix-icon="Search"
        clearable
        @change="changeInp()"
      />
    </div>

    <div class="container-content">
      <ul>
        <li v-for="(item, idx) in todoList" :key="idx" list="none">
          <el-checkbox v-model="item.status" size="large" />
          {{ item.content }}

          <el-button
            type="danger"
            :icon="Delete"
            circle
            :style="{ marginLeft: '200px' }"
            @click="delTodo(item.id)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
