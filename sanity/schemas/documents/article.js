// Import baseLanguage just to show an example with customizing the slug source
// option
import { baseLanguage } from '../languages'

export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  // This property says we should have all fields localized,
  // except any field that explicitly says localize: false
  localize: true,
  // We need to define preview if the fields we
  // use as preview of this document in lists etc
  // is a translated field. The fields we name here
  // will be used for previews with the value of the
  // base language.
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        // How you could manually specify a translated field, should you have
        // to.
        source: `title.${baseLanguage.name}`
      },
      localize: false
    },
    {
      type: 'openGraph',
      name: 'openGraph',
      localize: false
    },
    {
      type: 'image',
      name: 'image',
      options: {
        hotspot: true
      },
      localize: false
    },
    {
      title: 'Body',
      type: 'blockContent',
      name: 'body'
    },
    {
      type: 'reference',
      name: 'author',
      to: [{ type: 'author' }]
    }
  ]
}
