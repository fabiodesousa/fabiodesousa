import * as React from "react"


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const blockStyles = {
  minHeight: 700,
  width: "100%",
}

const headingStyles = {
  fontFamily: "Josefin sans",
  fontWeight: 700,
}

const centeredColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

const heroStyles = {
  border: "5px solid",
  borderRadius: 25,
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(75deg, rgba(0,0,0,0) 30%, #000)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  padding: "2rem 4rem",
}

const paragraphStyles = {

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
      <div style={{...centeredColumn, ...blockStyles}}>
        <div style={{...heroStyles, ...centeredColumn}}>
          <h1 style={headingStyles}>
            Fabio de Sousa
          </h1>
          <p style={paragraphStyles}>
            Always getting better.
          </p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
