import { DataExistException } from 'common/exceptions';

export default class EmailAlreadyRegisteredException {
  constructor() {
    throw new DataExistException({ message: 'Email already registered.' });
  }
}
