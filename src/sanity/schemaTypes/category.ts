import { defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(50)
          .warning('Category name must be between 3 and 50 characters.')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).warning('Description should not exceed 200 characters.')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.error('Category image is optional but can enhance the user experience.')
    }
  ]
});
