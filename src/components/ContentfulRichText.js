import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from 'react'

const ContentfulRichText = (body) => {
  if(body.body) {
    const richText = body.body.json;
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          return(
            <img
              src={node.data.target.fields.file['en-US'].url}
              alt={node.data.target.fields.description['en-US']}
            />
          )
        }
      },
    }
    return(documentToReactComponents(richText, options))
  }
  else {
    return(<div />)
  }
}

export default ContentfulRichText;