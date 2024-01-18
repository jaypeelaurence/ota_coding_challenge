import Paginate from './Paginate.type';

export default interface Response extends Paginate {
  message?: string;
}
