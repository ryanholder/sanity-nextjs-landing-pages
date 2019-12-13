export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df39665dbcc44707f766650',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yuf1gkf3',
                  apiId: '273ecdf9-0408-44db-b771-fe161c22387a'
                },
                {
                  buildHookId: '5df39665636cbea492b852c6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6w7g38ta',
                  apiId: '8be85f63-5626-414b-8844-165f8c3d76d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanholder/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6w7g38ta.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
