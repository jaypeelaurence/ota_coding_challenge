import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class NoteCreateRequest {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    content?: string;
}
