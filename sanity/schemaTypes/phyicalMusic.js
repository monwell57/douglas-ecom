export default {
  name: 'physicalMusic',
  title: 'Physical Music',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          {title: 'CD', value: 'cd'},
          {title: 'Vinyl', value: 'vinyl'},
          {title: 'Limited Edition', value: 'limitedEdition'},
        ],
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
  ],
}
