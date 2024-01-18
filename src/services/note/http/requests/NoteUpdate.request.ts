import { IsDate, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import NoteCreateRequest from './NoteCreate.request';

export default class NoteUpdateRequest extends PartialType(NoteCreateRequest) {
  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  title: string;
  
  @IsOptional()
  @IsDate()
  updatedAt: Date;
}
