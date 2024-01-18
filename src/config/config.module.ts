import { Module } from '@nestjs/common';

import providers from './providers';
import _exports  from './exports';

@Module({
  providers,
  exports: _exports,
})
export default class ConfigModule {}
