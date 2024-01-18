import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export default function IsMatch(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isMatch',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: {
        message: `${property} and ${propertyName} do not match`,
        ...validationOptions,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;

          return value === (args.object as any)[relatedPropertyName];
        },
      },
    });
  };
}
