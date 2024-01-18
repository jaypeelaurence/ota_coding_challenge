import {
  Controller,
  Body,
  Param,
  Get,
  Delete,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Response, Uuid } from 'common/models';
import { NoteService } from 'services/note/providers/services';
import { NoteCreateRequest, NoteUpdateRequest } from '../requests';

export const PREFIX_CONTROLLER = 'notes';

@Controller(PREFIX_CONTROLLER)
export default class NoteController {
  constructor(
    private readonly noteService: NoteService,
  ) {
    this.noteService = noteService;
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getNotes(): Promise<Response> {
    return await this.noteService.findBy();
  }
  
  @Get(':uuid')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getNoteByUuid(
    @Param() { uuid }: Uuid,
  ): Promise<Response> {
    const data = await this.noteService.findByUuid(uuid);

    return { data };
  }
  
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async createNote(
    @Body() payload: NoteCreateRequest,
  ): Promise<Response> {
    return {
      data: await this.noteService.createNote(payload),
      message: 'Successfully created a note.',
    };
  }
  
  @Put(':uuid')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async updateNote(
    @Param() { uuid }: Uuid,
    @Body() payload: NoteUpdateRequest,
  ): Promise<Response> {
    return {
      data: await this.noteService.updateNote(uuid, payload),
      message: 'Successfully updated a note.',
    };
  }
  
  @Delete(':uuid')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteNote(
    @Param() { uuid }: Uuid,
  ): Promise<Response> {
    await this.noteService.deleteNote(uuid);

    return {
      message: 'Successfully deleted a note.',
    };
  }
}
