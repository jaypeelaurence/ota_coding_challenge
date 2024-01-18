import { Injectable } from '@nestjs/common';
import { Filter, Uuid } from 'common/models';
import Paginate, { Data } from 'common/models/Paginate.type';
import { UUID } from 'crypto';
import { NoteCreateRequest, NoteUpdateRequest } from 'services/note/http/requests';
import { Note, NotePagination } from 'services/note/schemas/Note';

@Injectable()
export default class NoteRepository {
  constructor() {}

  async findOneByKey(
    key: string,
    value: string | number | boolean | UUID | any,
    dataProjection: any = {},
  ): Promise<Note> {
    return {} as Note;
  }

  async findBy(
    filters: Filter,
  ): Promise<NotePagination> {
    const notes = [] as Note[];

    return {
      data: notes,
      meta: {
        page: 0,
        total: 0,
        totalPages: 0,
        perPage: 0,
      }
    }
  }

  async findByUuid(
    uuid: Uuid,
    filter: Filter = {},
  ): Promise<Note> {
    return {} as Note;
  }

  async create(
    payload: NoteCreateRequest,
  ): Promise<Note> {
    return {} as Note;
  }

  async update(
    uuid: Uuid,
    payload: NoteUpdateRequest,
  ): Promise<Note> {
    return {} as Note;
  }

  async delete(uuid: Uuid): Promise<void> {}
}
