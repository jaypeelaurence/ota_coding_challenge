import { IsEnum, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { UUID } from 'crypto';

import Meta from './Meta.type';

export enum ORDER_BY_TYPE {
  ASC = 'ASC',
  DESC = 'DESC',
}

export default class Filter {
  @IsOptional()
  uuid?: UUID;

  @IsOptional()
  keyword?: string;

  @IsOptional()
  sortBy?: string;

  @IsOptional()
  page?: number;

  @IsOptional()
  perPage?: number;

  @IsOptional()
  @IsEnum(ORDER_BY_TYPE)
  orderBy?: ORDER_BY_TYPE;

  [key: string]: any;
}
