import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as Styled from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
            author
          }
        }
      }
    `
  )

  return (
    <Styled.ProfileWrapper>
      <Styled.ProfileLink to="/">
        <Avatar />
        <Styled.ProfileAuthor>{title}</Styled.ProfileAuthor>
        <Styled.ProfilePosition>{position}</Styled.ProfilePosition>
      </Styled.ProfileLink>
      <Styled.ProfileDescription>{description}</Styled.ProfileDescription>
    </Styled.ProfileWrapper>
  )
}

export default Profile
