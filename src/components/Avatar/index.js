import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Styled.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
