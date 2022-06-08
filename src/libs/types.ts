// * 请求响应参数(不包含data)
export interface Result {
  code: string;
  msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  [x: string]: any;
  data?: T;
}

export interface ILogin {
  userName: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
}
