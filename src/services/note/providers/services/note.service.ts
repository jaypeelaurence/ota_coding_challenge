import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

import { Filter, Uuid } from 'common/models';
import { Note, NotePagination } from 'services/note/schemas/Note';
import { NoteRepository } from 'services/note/providers/repositories';
import { NoteCreateRequest, NoteUpdateRequest } from 'services/note/http/requests';

@Injectable()
export default class NoteService {
  constructor(private readonly noteRepo: NoteRepository) {
    this.noteRepo = noteRepo;
  }

  async findOneByKey(
    key: string,
    value: string | number | boolean | UUID | any,
  ): Promise<Note> {
    return await this.noteRepo.findOneByKey(key, value);
  }

  async findBy(
    filters: Filter,
  ): Promise<NotePagination> {
    return await this.noteRepo.findBy(filters);
  }

  async findByUuid(uuid: Uuid): Promise<Note> {
    return await this.findOneByKey('id', uuid);
  }

  async createNote(
    payload: NoteCreateRequest,
  ): Promise<Note> {
    return await this.noteRepo.create(payload);
  }

  async updateNote(
    uuid: Uuid,
    payload: NoteUpdateRequest,
  ): Promise<Note> {
    return await this.noteRepo.update(uuid, payload);
  }

  async deleteNote(uuid: Uuid): Promise<void> {
    await this.noteRepo.delete(uuid);
  }
}
