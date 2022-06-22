<script lang="ts" setup>
import { Calendar, Search, Delete, List } from '@element-plus/icons-vue';
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus';
import draggable from 'vuedraggable';

import useUser from '@/store/modules/login';
const store = useUser();
const { tid, todoList } = storeToRefs(store);
let input2 = $ref('');

const changeInp = (): void => {
  store.addTodo(input2);
  input2 = '';
  console.log(tid, todoList, '💙💛');
};

const changeStatus = (status: boolean, tid: number): void => {
  if (status == true) {
    store.sort(tid);
  }
};

const delTodo = (id: number): void => {
  ElMessageBox.confirm('您确定要删除当前记录吗?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
    center: true,
  })
    .then(() => {
      store.deleteTodo(id);

      ElMessage({
        type: 'success',
        message: '删除完成',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      });
    });
};

// 拖拽
const isDrag = $ref(false);
</script>

<template>
  <SwitchDark class="dark"></SwitchDark>
  <div class="container" flex items-center justify-center flex-col>
    <div w="400px" m="t20px">
      <el-input
        v-model="input2"
        placeholder="每天记录一点点"
        :prefix-icon="List"
        clearable
        @change="changeInp()"
      />
    </div>

    <div
      class="container-content"
      w="400px"
      m="t20px"
      p="20px"
      box="border"
      bg="#f3f4f6"
    >
      <draggable
        v-model="todoList"
        @start="isDrag = true"
        @end="isDrag = false"
        item-key="item.id"
        flex
        items-center
      >
        <template #item="{ element }">
          <div class="container-list-item" flex items-center>
            <el-checkbox
              v-model="element.status"
              size="large"
              @change="changeStatus(element.status, element.id)"
            />

            <div
              flex="1"
              color="#000"
              m="l10px"
              class="yichu"
              :class="element.status ? 'line-through' : ''"
            >
              {{ element.content }}
            </div>

            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click="delTodo(element.id)"
              m="l10px"
            />
          </div>
        </template>
      </draggable>

      <!-- <ul>
        <li
          v-for="(item, idx) in todoList"
          :key="idx"
          list="none"
          flex
          items-center
        >
          <el-checkbox
            v-model="item.status"
            size="large"
            @change="changeStatus(item.status, item.id)"
          />

          <div
            flex="1"
            color="#000"
            m="l10px"
            class="yichu"
            :class="item.status ? 'line-through' : ''"
          >
            {{ item.content }}
          </div>

          <el-button
            type="danger"
            :icon="Delete"
            circle
            @click="delTodo(item.id)"
            m="l10px"
          />
        </li>
      </ul> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dark {
  top: 3%;
  right: 5%;
  position: absolute;
}

.container-list-item {
  box-shadow: 0 3px 8px rgba(15, 82, 199, 0.223);
  border-radius: 20px;
  padding: 5px 20px 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
