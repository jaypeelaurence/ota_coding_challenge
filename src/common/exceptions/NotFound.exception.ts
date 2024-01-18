import { HttpException, HttpStatus } from '@nestjs/common';

import { Exception } from 'common/models';

export default class NotFoundException extends HttpException {
  constructor(props: Exception) {
    const { collection, id, message } = props;

    let errorMessage = '';

    errorMessage += `Data ${id ? `${id} ` : ''}`;

    if (collection)
      errorMessage += collection
        ? `in ${collection} collection `
        : '';

    errorMessage += 'not found.';

    if (message) errorMessage = message;

    super(errorMessage, HttpStatus.NOT_FOUND);
  }
}
