import { Module } from '@nestjs/common';
import controllers from './http/controllers';
import imports from './imports';
import providers from './providers';

@Module({
  controllers,
  imports,
  providers,
})
export default class AppModule {}
