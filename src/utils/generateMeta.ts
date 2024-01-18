const generateMeta = (total: number, page: number, perPage: number) => ({
  page: +page,
  total: +total,
  totalPages: Math.round(total / perPage),
  perPage: +perPage,
});

export default generateMeta;
