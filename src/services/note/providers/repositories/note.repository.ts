import { Injectable } from '@nestjs/common';

import { Uuid } from 'common/models';

import { NoteCreateRequest, NoteUpdateRequest } from 'services/note/http/requests';
import { Note, NotePagination } from 'services/note/schemas/Note';
import { DatabaseService } from 'config/providers/services';
import { generateMeta } from 'utils';

@Injectable()
export default class NoteRepository {
  constructor(private readonly dbService: DatabaseService) {
    this.dbService = dbService;

    this.dbService.init('notes');
  }

  async findBy(): Promise<NotePagination> {
    const data = await this.dbService.find() as Note[];

    return {
      data,
      meta: await generateMeta((await this.dbService.find()).length),
    }
  }

  async findOneByKey(
    key: string,
    value: string | number | boolean | Uuid | any,
  ): Promise<Note> {
    const data = await this.dbService.findOne(key, value) as Note;

    if (!data) {
      // notfound
    }

    return data;
  }

  async findByUuid(
    uuid: Uuid,
  ): Promise<Note> {
    return await this.findOneByKey('uuid', uuid);
  }

  async create(
    payload: NoteCreateRequest,
  ): Promise<Note> {
    return await this.dbService.create(payload) as Note;
  }

async update(
    uuid: Uuid,
    payload: NoteUpdateRequest,
  ): Promise<Note> {
    return await this.dbService.update(uuid, payload) as Note;
  }

  async delete(uuid: Uuid): Promise<void> {
    await this.dbService.delete(uuid);
  }
}
