const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const eventPage = path.resolve('./src/templates/event-page.js')
  const projectPage = path.resolve('./src/templates/project-page.js')


  const result = await graphql(
    `
      {
        allContentfulEvent {
          nodes {
            title
            slug
          }
        }
        allContentfulProject {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the Events`,
      result.errors
    )
    return
  }

  const events = result.data.allContentfulEvent.nodes
  const projects = result.data.allContentfulProject.nodes

  // Create event pages
  events.forEach((event, index) => {
    const previousEventSlug = index === 0 ? null : events[index - 1].slug
    const nextEventSlug =
      index === events.length - 1 ? null : events[index + 1].slug

    createPage({
      path: `/event/${event.slug}/`,
      component: eventPage,
      context: {
        slug: event.slug,
        previousPostSlug: previousEventSlug,
        nextPostSlug: nextEventSlug,
      },
    })
  })

  // Create project pages
  projects.forEach((project, index) => {
    createPage({
      path: `/project/${project.slug}/`,
      component: projectPage,
      context: {
        slug: project.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'ContentfulEvent',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (source) => new Date(source.publishDate) > new Date(),
        },
      },
    }),
  ])
}
