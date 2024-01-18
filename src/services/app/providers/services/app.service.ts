import { Injectable, OnModuleInit } from '@nestjs/common';
import DatabaseService from 'databases';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly databaseService: DatabaseService,
  ) {
    this.databaseService = databaseService;
  }

  async onModuleInit(): Promise<void> {
    await this.databaseService.init();
  }
}
