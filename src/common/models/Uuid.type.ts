import { IsNotEmpty, IsUUID } from 'class-validator';

export default class Uuid {
  @IsNotEmpty()
  @IsUUID()
  uuid: Uuid;
}
