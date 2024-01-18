import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import NoteCreateRequest from './NoteCreate.request';

export default class NoteUpdateRequest extends PartialType(NoteCreateRequest) {
  @IsNotEmpty()
  @IsString()
  content: string;
  
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}
