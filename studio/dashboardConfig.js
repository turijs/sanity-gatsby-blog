export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2b1b3fdec569d492ca5f82',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-etbhtvey',
                  apiId: '31b295b5-3903-41d5-a6e0-c4787b6c1ec1'
                },
                {
                  buildHookId: '5e2b1b3f5288b07bc2ea5086',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4shpbbyw',
                  apiId: 'b39fbe8d-f8d5-4711-9a70-d38760a54ab0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/turijs/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4shpbbyw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
