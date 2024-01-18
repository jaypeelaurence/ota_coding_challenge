import { Injectable } from '@nestjs/common';

import { writeFile, readFile, readdir } from 'fs/promises';

import c from 'common/constants';
import { uuid } from 'uuidv4';

@Injectable()
export default class DatabaseService {
  path = `${c.DIR_PATH}/databases` as string;

  async init(): Promise<void> {
    const files = await readdir(this.path) as string[];

    if (
      !files
        .filter((f: string): boolean => f.search(/json/i) > 0)
        .filter((f: string): boolean => f.search(/test.json/i) < 0)
        .length
    ) {
      const file = await readFile(`${this.path}/test.json`);

      await writeFile(`${this.path}/${uuid()}.json`, file, 'utf8');
    }
  }
}