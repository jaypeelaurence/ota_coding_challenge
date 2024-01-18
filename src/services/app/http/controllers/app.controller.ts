import { Controller, Get } from '@nestjs/common';

import * as dayjs from 'dayjs';

import { dateTimezone } from 'utils';
import { Response } from 'common/models';
import c from 'common/constants';

@Controller()
class AppController {
  @Get()
  async index(): Promise<Response> {
    const currentDate = dayjs().toDate();

    return {
      data: {
        server_timezone: `${dateTimezone(currentDate).format(c.DATE_FORMAT)} ${
          process.env.APP_TIMEZONE
        }`,
        local_timezone: `${dayjs(currentDate)
          .tz(dayjs.tz.guess())
          .format(c.DATE_FORMAT)} ${dayjs.tz.guess()}`,
        version: process.env.APP_VERSION,
      },
      message: `Welcome to ${process.env.APP_NAME}`,
    };
  }
}

export default AppController;
