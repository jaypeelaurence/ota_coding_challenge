import { registerDecorator, ValidationOptions } from 'class-validator';

import c from 'common/constants';

export default function IsPassword(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message:
          'Password must contain at least 8 characters including a number and a letter.',
        ...validationOptions,
      },
      validator: {
        validate(value: string) {
          const regex = new RegExp(c.PASSWORD_REGEX);

          return regex.test(value);
        },
      },
    });
  };
}
