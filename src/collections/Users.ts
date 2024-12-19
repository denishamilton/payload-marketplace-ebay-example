import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed

    {
      name: 'loginName',
      type: 'text',
      required: true,
    },

    {
      name: 'phone',
      type: 'text',
      required: false,
    },

    {
      name: 'userType',
      type: 'select',
      options: [
        {
          label: 'Private',
          value: 'private',
        },
        {
          label: 'Commercial',
          value: 'commercial',
        },
      ],

      required: false,
    },
  ],
}
