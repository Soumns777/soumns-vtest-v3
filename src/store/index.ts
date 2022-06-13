import useUser from '@/store/modules/login';

// 箭头函数返回对象写法
const useStore = () => ({
  User: useUser(),
});

export const useEverything = () => {
  return {
    User: useUser(),
  };
};

export const useSomething = () => ({ a: 1 });

export default useStore;
