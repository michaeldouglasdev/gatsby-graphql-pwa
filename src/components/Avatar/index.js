import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "michael-douglas-perfil.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Styled.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
