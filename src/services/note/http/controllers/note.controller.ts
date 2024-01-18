import {
  Controller,
  Body,
  Param,
  Get,
  Delete,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { UUID } from 'crypto';

import { Filter, Response, Uuid } from 'common/models';
import { NoteCreateRequest, NoteUpdateRequest } from '../requests';

export const PREFIX_CONTROLLER = 'notes';

@Controller(PREFIX_CONTROLLER)
export default class NoteController {
  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getNotes(
    @Query() filter: Filter,
  ): Promise<Response> {
    return {
      message: 'Notes',
    };
  }
  
  @Get('$uuid')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getNoteByUuid(
    @Param() { uuid }: { uuid: UUID },
  ): Promise<Response> {
    return {
      data: {
        uuid,
      },
      message: 'Notes',
    };
  }
  
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async createNote(
    @Body() payload: NoteCreateRequest,
  ): Promise<Response> {
    return {
      data: {
        payload,
      },
      message: 'Notes',
    };
  }
  
  @Put('$uuid')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async updateNote(
    @Param() { uuid }: Uuid,
    @Body() payload: NoteUpdateRequest,
  ): Promise<Response> {
    return {
      data: {
        uuid,
        payload,
      },
      message: 'Notes',
    };
  }
  
  @Delete('$uuid')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteNote(
    @Param() { uuid }: Uuid,
    @Body() payload: { [key: string]: any },
  ): Promise<Response> {
    return {
      data: {
        uuid,
        payload,
      },
      message: 'Notes',
    };
  }
}
