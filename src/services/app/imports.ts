import { RouterModule } from '@nestjs/core';
import routes from './routes';
import NoteModule from 'services/note';

export default [
  NoteModule,
  RouterModule.register(routes),
];
