import React from "react";

export default ({data}) => (
  <div css={{
    maxWidth: 800,
    minHeight: '100vh',
    marginLeft: '3rem',
  }}>
    <h1>{data.contentfulPost.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.contentfulPost.body.childMarkdownRemark.html}}/>
  </div>
)


export const query = graphql`
query PostQuery($id: String!) {
  contentfulPost(id: { eq: $id }) {
    title
    body {
      childMarkdownRemark {
        html
      }
    }
  }
}
`;