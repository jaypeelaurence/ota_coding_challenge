import { NotFoundException } from 'common/exceptions';
import { Uuid } from 'common/models';

export default class NoteNotFoundException {
  constructor(uuid: Uuid | Uuid[]) {
    throw new NotFoundException({ collection: 'notes', uuid });
  }
}
