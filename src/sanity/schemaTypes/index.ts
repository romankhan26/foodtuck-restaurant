import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import faqs from './faqs';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef,faqs],
};
