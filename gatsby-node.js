
/* exports.onCreateNode = ({ node }) => {
  
  if(node.internal.type === 'ContentfulProject') {
    console.log(node);
  }
};
*/

const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              slug
              id
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `
  ).then(result => {
      result.data.allContentfulProject.edges.forEach(({node}) => {
        createPage({
          path: `/project/${node.slug}/`,
          component: path.resolve('./src/templates/project.js'),
          context: {
            id: node.id,
          }
        });
      });
      result.data.allContentfulPost.edges.forEach(({node}) => {
        console.log(node);
        createPage({
          path: `/blog/${node.slug}/`,
          component: path.resolve('./src/templates/post.js'),
          context: {
            id: node.id,
          }
        });
      });
      resolve();
    })
  })
};