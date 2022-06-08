import RequestHttp from '@/libs/http';

import { ILogin, LoginRes } from '@/libs/types';

// * 用户登录接口
export const login = (params: ILogin) => {
  return RequestHttp.get<LoginRes>('/api/login', params);
};
