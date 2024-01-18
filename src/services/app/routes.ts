import { Routes } from '@nestjs/core';
import NoteModule from 'services/note';

export default <Routes>[
  {
    path: '/',
    children: [
      {
        path: '/',
        module: NoteModule,
      },
    ],
  },
];
