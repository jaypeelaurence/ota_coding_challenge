import { omitBy, isNil, isArray, isEmpty } from 'lodash';
import { isUuid } from 'uuidv4';

const checkValue = (value: any): boolean => {
  if (isArray(value) && isEmpty(value)) return true;

  if (typeof value === 'string' && isUuid(value)) return false;

  if (isEmpty(value)) return true;

  return isNil(value);
};

interface REMOVE_EMPTY {
  [key: string]: any;
}

export default function removeEmpty(obj): REMOVE_EMPTY {
  return omitBy(obj, checkValue);
}
