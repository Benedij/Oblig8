/*Sette opp schema for movie

Skal ha et felt kalt title av typen string
https://www.sanity.io/docs/string-type
Skal ha et felt kalt actor av typen reference
https://www.sanity.io/docs/reference-type
*/
export default {
  {
    title: 'title',
    name: 'Title',
    type: 'string',
    description: 'Skriv inn tittelen her.',
    validation: Rule => Rule.max(120).warning(`Tittelen kan ikke være mer enn 120 tegn.`)
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    }
  ]
},
{
  name: 'Actor',
  type: 'document',
  fields: [
    {
      name: 'movie',
      title: 'Actor',
      type: 'reference',
      weak: true,
      to: [{type: 'actor'}],
      description: 'Skuespillere'
    },
  ]
}
