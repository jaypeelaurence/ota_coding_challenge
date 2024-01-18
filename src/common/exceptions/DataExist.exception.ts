import { HttpException, HttpStatus } from '@nestjs/common';
import { toTitleCase } from 'utils/string';

import { Exception } from 'common/models';

export default class DataExistException extends HttpException {
  constructor(props: Exception) {
    const { collection, id, message } = props;

    let errorMessage = '';

    if (id) errorMessage += id ? `Data ${id} ` : 'Data';

    if (collection)
      errorMessage += collection
        ? `in ${toTitleCase(collection)} collection `
        : '';

    errorMessage += 'already exist.';

    if (message) errorMessage = message;

    super(errorMessage, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
