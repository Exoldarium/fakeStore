import { parseToNumber, parseToString } from './normalizeData';

import { Product } from '@/types/product';

const toNormalizedProductEntry = (entry: unknown): Product => {
  if (!entry || typeof entry !== 'object')
    throw new Error('Invalid product API entry');

  if (
    'id' in entry &&
    'title' in entry &&
    'price' in entry &&
    'description' in entry &&
    'category' in entry &&
    'image' in entry
  ) {
    const parsedQuoteEntry: Product = {
      id: parseToNumber(entry.id),
      title: parseToString(entry.title),
      price: parseToNumber(entry.price),
      description: parseToString(entry.description),
      category: parseToString(entry.category),
      image: parseToString(entry.image),
    };

    return parsedQuoteEntry;
  }

  throw new Error('Invalid product API entry or some fields might be missing');
};

export { toNormalizedProductEntry };
