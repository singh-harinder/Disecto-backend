import { list } from '@keystone-next/keystone/schema';
import { text, password, checkbox, relationship } from '@keystone-next/fields';

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    reviews: relationship({
      ref: 'Review.user',
      many: true,
    }),
    isAdmin: checkbox({
      isRequired: true,
      label: 'Admin',
      defaultValue: false,
    }),
  },
});
