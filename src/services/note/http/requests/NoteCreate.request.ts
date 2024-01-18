import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { Uuid } from 'common/models';

export default class NoteCreateRequest {
    @IsOptional()
    @IsUUID()
    uuid?: Uuid;

    @IsOptional()
    @IsUUID()
    actorUuid?: Uuid;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
