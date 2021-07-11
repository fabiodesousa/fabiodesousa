import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: 600,
  alignItems: "center",
  justifyContent: "center",
}

const headingStyles = {
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Fabio de Sousa</title>
      <h1 style={headingStyles}>
        Fabio de Sousa
      </h1>
      <p style={paragraphStyles}>
        Always getting better.
      </p>
    </main>
  )
}

export default IndexPage
