/*Sette opp schema for actor

Skal ha et felt kalt full name av typen string
https://www.sanity.io/docs/string-type
Skal ha et felt kalt name av typen slug
https://www.sanity.io/docs/slug-type
*/

export default {
  {
    title: 'full name',
    name: 'Full name',
    type: 'string',
    description: 'Skriv inn navnet her.',
    validation: Rule => Rule.max(120).warning(`Du kan ikke skrive mer enn 120 tegn.`)
  },
  fields: [
    {
      name: 'Full name',
      type: 'string',
      title: 'full name'
    }
  ]
},
{
  title: 'Slug',
  name: 'name',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 200, // will be ignored if slugify is set
    slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
  }
}