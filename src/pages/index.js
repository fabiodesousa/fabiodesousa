import React from 'react';
import Tile from '../components/tile';
import Banner from '../components/banner';

const IndexPage = ({data}) => {
  return(
    <div css={{width:'100%'}}>
      <Banner title="Fabio De Sousa" subtitle="Always getting better" hero={data.contentfulAsset.sizes.src} />
      <div css={{
        margin: 'auto',
        maxWidth: 960,
      }}>
        <div css={{margin:'auto', paddingLeft:'2rem'}}>
          <h4>I'm a generalist, software developer, and user experience designer based in Tampa, Florida.</h4>
        </div>
        <div css={{
          display:'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          paddingBottom: '4rem',
        }}>
          <div css={{
            paddingLeft:'2rem',
            width: '100%',
          }}>
            <h1>Projects</h1>
          </div>
          {data.allContentfulProject.edges.map(project => (
              <Tile
                title={project.node.title}
                img={project.node.thumbnail.resolutions.src}
                img_alt={project.node.thumbnail.title}
                subtitle={project.node.subtitle}
                link={`/project/${project.node.slug}/`}
                link_text="Read more."
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
query HomeQuery {
  contentfulAsset(title: {eq:"hero"}) {
    title
    sizes(maxWidth:1600) {
      src
    }
  }
  allContentfulProject(sort:{fields: [sortOrder], order:ASC}) {
    edges {
      node {
        title
        subtitle
        slug
        thumbnail {
          title
          resolutions(width:400, height:200) {
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
}
`;