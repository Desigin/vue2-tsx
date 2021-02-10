// 跳转
interface redirectInterface {
  name: string;
}
interface childrenMetaInterface {
  title: string;
}
interface childrenInterface {
  path?: string;
  name?: string;
  meta: childrenMetaInterface;
  component: string | any
}
export interface routerInterface {
  path: string;
  name: string;
  component: string | any;
  redirect?: redirectInterface,
  children?: childrenInterface[]
}