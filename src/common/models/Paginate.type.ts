import Meta from './Meta.type';

export interface Data {
  [key: string]: any;
}

export default interface Paginate {
  data?: Data[] | Data;

  meta?: Meta;
}
