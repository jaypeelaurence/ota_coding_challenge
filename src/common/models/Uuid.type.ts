import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export default class Filter {
  @IsNotEmpty()
  @IsUUID()
  uuid: UUID;
}
