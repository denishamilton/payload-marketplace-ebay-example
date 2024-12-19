// hooks/useProducts.ts

import { useQuery } from '@tanstack/react-query'
import api from '../api/api'

// Функция для получения данных продуктов
const fetchProducts = async () => {
  const response = await api.get('/api/products') // Указываем правильный путь к API
  return response.data.docs // Возвращаем массив продуктов
}

// Кастомный хук
export const useProducts = () =>
  useQuery({
    queryKey: ['products'], // Уникальный ключ для кэширования данных
    queryFn: fetchProducts, // Функция запроса
  })
