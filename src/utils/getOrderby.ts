const getOrderBy = (by: string): number => {
  if (by < 'desc') return -1;

  return 1;
};

export default getOrderBy;
