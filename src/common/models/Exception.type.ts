import { Uuid } from ".";

export default interface ExceptionParams {
  collection?: string;
  uuid?: Uuid | Uuid[];
  message?: string;
  [key: string]: any;
}
