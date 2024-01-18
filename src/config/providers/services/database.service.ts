import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';
import * as dayjs from 'dayjs';

import { Uuid } from 'common/models';
import DatabaseConfig from 'config/providers/configs/database.config';
import { HttpError } from 'common/exceptions';

@Injectable()
export default class DatabaseService {
  collection: string;
  
  constructor(
    private readonly dbConfig: DatabaseConfig,
  ) {
    this.dbConfig = dbConfig;
  }

  async init(collection: string): Promise<void> {
    try {
      this.collection = collection;

      console.log(`${this.collection} collection is loaded.`);
    } catch(err) {
      throw new HttpError(err.message);
    }
  }
  
  async find(): Promise<{ [key: string]: any }[]> {
    try {
      return (await this.dbConfig.readDb())[this.collection];
    } catch(err) {
      throw new HttpError(err.message);
    }
  }
  
  async findOne(
    key: string,
    value: string | number | boolean | Uuid | any,
  ): Promise<{ [key: string]: any }> {
    try {
      return (await this.dbConfig.readDb())[this.collection].find((d) => d[key] === value);
    } catch(err) {
      throw new HttpError(err.message);
    }
  }
  
  async create(payload: { [key: string]: any }): Promise<{ [key: string]: any }> {
    try {
      const time = dayjs().toISOString();
      const _payload = {
        ...payload,
        uuid: v4(),
        createdAt: time,
        updatedAt: time,
      }

      await this.dbConfig.writeDb({
        [this.collection]: Array()
          .concat(
            (await this.dbConfig.readDb())[this.collection],
            _payload,
          ),
      });

      return _payload;
    } catch(err) {
      throw new HttpError(err.message);
    }
  }
  
  async update(uuid: Uuid, payload: { [key: string]: any }): Promise<{ [key: string]: any }> {
    try {
      let _payload: { [key: string]: any } = {
        ...payload,
        updatedAt: dayjs().toISOString(),
      };

      await this.dbConfig.writeDb({
        [this.collection]: (await this.dbConfig.readDb())[this.collection].map((d) => {
          if (d.uuid === uuid) {
            _payload = ({
              ...d,
              ..._payload
            });
  
            return _payload;
          }
  
          return d;
        }),
      });

      return _payload;
    } catch(err) {
      throw new HttpError(err.message);
    }
  }
  
  async delete(uuid: Uuid): Promise<void> {
    try {
      await this.dbConfig.writeDb({
        [this.collection]: (await this.dbConfig.readDb())[this.collection].filter((d) => d.uuid !== uuid)
      });
    } catch(err) {
      throw new HttpError(err.message);
    }
  }
}
