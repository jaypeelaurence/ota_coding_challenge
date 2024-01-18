import { UUID } from 'crypto';

export default interface ExceptionParams {
  collection?: string;
  uuid?: UUID;
  message?: string;
  [key: string]: any;
}
