<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { ValidateFieldsError } from 'async-validator';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import { login } from '@/services/request';
import { ILogin } from '@/libs/types';
import md5 from 'js-md5';

const router = useRouter();

const formSize = $ref('default');
const ruleFormRef = $ref<FormInstance>();
const ruleForm: ILogin = reactive({
  userName: 'admin',
  password: '123',
});
const rules = reactive<FormRules>({
  userName: [
    {
      required: true,
      message: 'Please input Activity userName',
      trigger: 'blur',
    },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity password',
      trigger: 'blur',
    },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      //   ElMessage.success('校验成功!');

      try {
        const res = await login({
          userName: ruleForm.userName,
          password: md5(ruleForm.password),
        });

        // get access_token
        console.log(res.data?.access_token, '💙💛 access_token');

        if (res.status == '200') {
          ElMessage.success('登录成功!');
          router.push({ name: 'todoList' });
        }
      } catch (error) {}
    } else {
      console.log('💙💛 error submit!', fields?.password[0].message);

      //   ElMessage.error(fields?.password[0].message);
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="container" p="t30px b80px l40px r40px">
    <div class="container-login-content" p="l30px t-80px">
      <div class="container-login-content-left">
        <img src="@/assets/uploads/login_left0.png" alt="login" />
      </div>

      <!-- <div
        class="translate-x--50% translate-y--50%"
        w="300px"
        pos="absolute"
        top="50%"
        left="50%"
      >
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="userName" prop="userName">
            <el-input v-model="ruleForm.userName" />
          </el-form-item>

          <el-form-item label="password" prop="password">
            <el-input v-model="ruleForm.password" />
          </el-form-item>

          <el-form-item>
            <el-button
              size="large"
              type="primary"
              @click="submitForm(ruleFormRef)"
              >Login</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-width: 100vw;
  min-height: 100vh;

  background-color: #eeeeee;
  background-image: url('@/assets/uploads/login_bg.svg');
  background-position: 50%;
  background-size: 100% 100%;
  box-sizing: border-box;
  @include children-page();
  .container-login-content {
    width: 96%;
    height: 94%;
    // background-color: #ff62003a;
    box-sizing: border-box;
  }
}
</style>
