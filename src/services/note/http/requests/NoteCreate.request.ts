import { IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { UUID } from 'crypto';

import { isUuid } from 'uuidv4';

export default class NoteCreateRequest {
    @IsOptional()
    @ValidateIf((v: NoteCreateRequest) => isUuid(v.uuid))
    uuid?: UUID;

    @IsOptional()
    @ValidateIf((v: NoteCreateRequest) => isUuid(v.actorUuid))
    actorUuid?: UUID;

    @IsNotEmpty()
    @IsString()
    content: string;
}
