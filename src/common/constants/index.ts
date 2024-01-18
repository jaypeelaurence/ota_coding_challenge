const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const PASSWORD_REGEX = '^(?=.*?[A-Z])|(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
const HEADERS = {
  ContentType: 'text/html',
};
const PER_PAGE = 20;
const PAGE = 12;
const JWT_SECRET = process.env.JWT_SECRET;

const ACCOUNT_USER_LIMIT_PER_LEAD = 3;

const DIR_PATH = `${process.cwd()}/src`

export default {
  DIR_PATH,
  DATE_FORMAT,
  PASSWORD_REGEX,
  HEADERS,
  PER_PAGE,
  PAGE,
  JWT_SECRET,
  ACCOUNT_USER_LIMIT_PER_LEAD,
};
