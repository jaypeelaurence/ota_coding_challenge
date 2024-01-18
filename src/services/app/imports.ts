import { RouterModule } from '@nestjs/core';
import routes from './routes';
import NoteModule from 'services/note';
import ConfigModule from 'config';

export default [
  ConfigModule,
  NoteModule,
  RouterModule.register(routes),
];
