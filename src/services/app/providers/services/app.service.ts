import { Injectable, OnModuleInit } from '@nestjs/common';

import { DatabaseConfig } from 'config/providers/configs';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly databaseConfig: DatabaseConfig,
  ) {
    this.databaseConfig = databaseConfig;
  }

  async onModuleInit(): Promise<void> {
    await this.databaseConfig.init();
  }
}
