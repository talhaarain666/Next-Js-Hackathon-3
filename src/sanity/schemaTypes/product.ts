import { defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100).warning('Name must be between 3 and 100 characters.')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500).warning('Description must be between 10 and 500 characters.')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Image is required.')
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive().precision(2).error('Price must be a positive number with up to two decimal places.')
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
      validation: (Rule) => Rule.min(0).precision(2).custom((value: any, context: any) => {
        if (value && value >= context.document.price) {
          return 'Discounted price must be less than the original price.';
        }
        return true;
      }).warning('Discounted price should be less than the original price if provided.')
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference', // Or use 'string' if categories are simple strings
      to: [{ type: 'category' }], // Reference to a 'category' document type
      validation: (Rule) => Rule.required().error('Category is required.')
    }
  ]
});
