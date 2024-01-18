import { IsDate, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { Uuid } from 'common/models';
import { Paginate } from 'common/models';

export class Note {
    @IsNotEmpty()
    uuid: Uuid;

    @IsOptional()
    @IsUUID()
    actorUuid?: Uuid;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsDate()
    createdAt: Date;

    @IsNotEmpty()
    @IsDate()
    updatedAt: Date;
}

export interface NotePagination extends Paginate {
    data: Note[];
}