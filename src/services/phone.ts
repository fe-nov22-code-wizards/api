import { FindOptions } from 'sequelize';
import { Phone } from '../dbInit/models/Phone';

export const getAll = async(
  page = 1,
  size = 24,
  sort?: string,
) => {
  const args: FindOptions<Phone> = {};


  if (sort) {
    const ordering = sort === 'year' ? 'DESC' : 'ASC';

    args.order = [
      [sort, ordering]
    ];
  }

  args.offset = (page - 1) * size;
  args.limit = page * size;

  const phones = await Phone.findAll(args);

  const total = await Phone.count();

  return {
    phones,
    info: {
      total,
      page,
      size,
    },
  };
};

export const getNew = async() => (
  Phone.findAll({
    limit: 12,
    order: [
      ['year', 'DESC']
    ]
  })
);
