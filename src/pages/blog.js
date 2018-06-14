import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment';

const Blog = ({data}) => {
  console.log('BLOG', data);
  return(
    <div css={{
      marginTop: '20vh',
      marginLeft: '20vw',
      marginRight: '20vw',
      maxWidth: 960,
    }}>
      {data.allContentfulPost.edges.map(node => {
        let post = node.node;
        console.log(post);
        return(
          <div key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              <h2 css={{marginBottom:'0', color:'inherit'}}>{post.title}</h2>
            </Link>
            <div css={{marginBottom: '0.5rem', color: 'lightgrey'}}>{moment(post.createdAt).fromNow()}</div>
            <div dangerouslySetInnerHTML={{__html: post.preview.childMarkdownRemark.html}}/>
          </div>
        )}
      )}
    </div>);
}

export default Blog;

export const query = graphql`
query Blog {
  allContentfulPost {
    edges {
      node {
        createdAt
        id
        title
        slug
        preview {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`;