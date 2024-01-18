import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

import c from 'common/constants';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault(process.env.APP_TIMEZONE);

const dateTimezone = (date = dayjs().toDate(), tz?: string) =>
  dayjs(dayjs(date).tz(tz).format(c.DATE_FORMAT));

export default dateTimezone;
