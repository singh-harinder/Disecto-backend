import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Review = list({
  fields: {
    title: text({ isRequired: true }),
    detailed_review: text({ isRequired: true }),
    product: relationship({
      ref: 'Product.reviews',
    }),
    user: relationship({
      ref: 'User.reviews',
    }),
  },
});
