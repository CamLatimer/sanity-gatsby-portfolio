export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e86a41538795bd31ac66583',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oqx5mte9',
                  apiId: '5d00daef-9a0a-45e1-89c9-45ceab5d3f77'
                },
                {
                  buildHookId: '5e86a41588053e9e7f96c27b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bqsgwosk',
                  apiId: 'b130f5ef-7756-401f-a64d-2cc4ff99a3d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CamLatimer/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bqsgwosk.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
