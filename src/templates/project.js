import React from "react";

export default ({data}) => (
  <div css={{
    maxWidth: 800,
    minHeight: '100vh',
    margin: 'auto',
  }}>
    <h1>{data.contentfulProject.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.contentfulProject.body.childMarkdownRemark.html}}/>
  </div>
)


export const query = graphql`
query ProjectQuery($id: String!) {
  contentfulProject(id: { eq: $id }) {
    title
    body {
      childMarkdownRemark {
        html
      }
    }
  }
}
`;