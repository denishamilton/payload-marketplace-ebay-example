import { User } from '@/payload-types'
import { APIError, type CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
      type: 'text',
      required: false,
    },

    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        step: 0.01,
      },
    },

    {
      name: 'deliveryAvailability',
      type: 'checkbox',
      required: false,
      defaultValue: false,
      label: 'Delivery Available',
    },

    {
      name: 'deliveryPrice',
      type: 'number',
      required: false,

      // хук, который не позволяет отправить в запросе price, если deliveryAvailability = false
      hooks: {
        beforeValidate: [
          async ({ data }) => {
            if (!data?.deliveryAvailability && data?.deliveryPrice) {
              throw new APIError(
                'Delivery price is not allowed when deliveryAvailability is false',
                400,
              )
            }
          },
        ],
      },

      admin: {
        step: 0.01,
        // показываем, только если deliveryAvailability = true
        condition: ({ deliveryAvailability }) => deliveryAvailability,
      },
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,

      defaultValue: ({ user }: { user: User }) => {
        // Устанавливаем текущего пользователя как значение по умолчанию
        return user?.id
      },

      filterOptions: ({ user }) => {
        // Ограничиваем выбор только текущим залогиненным пользователем
        return {
          id: {
            equals: user?.id, // user.id — это ID текущего пользователя
          },
        }
      },
    },
  ],
}
