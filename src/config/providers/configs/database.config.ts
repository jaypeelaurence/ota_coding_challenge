import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';
import { writeFile, readFile, readdir } from 'fs/promises';

import c from 'common/constants';

export const DB_PATH = `${c.DIR_PATH}/database` as string;

@Injectable()
export default class DatabaseConfig {
  async init(): Promise<void> {
    const dbFile = await this.getDBFile();

    if (!dbFile) {
      const file = await readFile(`${DB_PATH}/test.json`);

      await writeFile(`${DB_PATH}/${v4()}.json`, file, 'utf8');

      console.log('Database initialized and created.');
    } else {
      console.log('Database initialized.');
    }
  }
  
  async getDBFile(): Promise<string> {
    const files = await readdir(DB_PATH) as string[];

    return files
      .filter((f: string): boolean => f.search(/json/i) > 0)
      .filter((f: string): boolean => f.search(/test.json/i) < 0)[0];
  }
  
  async readDb(): Promise<{ [key: string]: any }> {
    const dbBufferFile: Buffer = await readFile(`${DB_PATH}/${await this.getDBFile()}`);

    return JSON.parse(dbBufferFile.toString());
  }
  
  async writeDb(payload: { [key: string]: any }): Promise<void> {
    await writeFile(
      `${DB_PATH}/${await this.getDBFile()}`,
      JSON.stringify({
        ...await this.readDb(),
        ...payload,
      }),
      'utf8'
    );
  }
}