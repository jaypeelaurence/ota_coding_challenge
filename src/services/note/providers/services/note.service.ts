import { Injectable } from '@nestjs/common';

import { Uuid } from 'common/models';
import { Note, NotePagination } from 'services/note/schemas/Note';
import { NoteRepository } from 'services/note/providers/repositories';
import { NoteCreateRequest, NoteUpdateRequest } from 'services/note/http/requests';
import { NoteNotFoundException } from 'services/note/http/exceptions';
import { error } from 'console';
import { UnprocessableDataEntryException, UnprocessableEntryException } from 'common/exceptions';

@Injectable()
export default class NoteService {
  constructor(private readonly noteRepo: NoteRepository) {
    this.noteRepo = noteRepo;
  }

  async findOneByKey(
    key: string,
    value: string | number | boolean | Uuid | any,
  ): Promise<Note> {
    try {
      return await this.noteRepo.findOneByKey(key, value);
    } catch (err) {
      throw new UnprocessableEntryException(err.message);
    }
  }

  async findBy(): Promise<NotePagination> {
    try {
      return await this.noteRepo.findBy();
    } catch (err) {
      throw new UnprocessableEntryException(err.message);
    }
  }

  async findByUuid(uuid: Uuid): Promise<Note> {
    try {
      const note = await this.findOneByKey('uuid', uuid);

      if (!note) throw new NoteNotFoundException(uuid);

      return note;
    } catch (err) {
      if (err.name === 'NotFoundException')
        throw new NoteNotFoundException(uuid);

      throw new UnprocessableEntryException(err.message);
    }
  }

  async createNote(
    payload: NoteCreateRequest,
  ): Promise<Note> {
    try {
      return await this.noteRepo.create(payload);
    } catch (err) {
      throw new UnprocessableDataEntryException(payload);
    }
  }

  async updateNote(
    uuid: Uuid,
    payload: NoteUpdateRequest,
  ): Promise<Note> {
    await this.findByUuid(uuid);

    try {
      return await this.noteRepo.update(uuid, payload);
    } catch (err) {
      throw new UnprocessableDataEntryException(payload);
    }
  }

  async deleteNote(uuid: Uuid): Promise<void> {
    await this.findByUuid(uuid);

    try {
      await this.noteRepo.delete(uuid);
    } catch (err) {
      throw new UnprocessableEntryException(err.message);
    }
  }
}
