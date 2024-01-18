import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UUID } from 'crypto';

import { Paginate } from 'common/models';

export class Note {
    @IsNotEmpty()
    uuid: UUID;

    @IsOptional()
    @IsString()
    actorUuid?: UUID;

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