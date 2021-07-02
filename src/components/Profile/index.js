import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as Styled from "./styled"
import getThemeColor from "../../utils/getThemeColor"

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
      <Styled.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <Styled.ProfileAuthor>
          {title}
          <Styled.ProfilePosition>{position}</Styled.ProfilePosition>
        </Styled.ProfileAuthor>
      </Styled.ProfileLink>
      <Styled.ProfileDescription>{description}</Styled.ProfileDescription>
    </Styled.ProfileWrapper>
  )
}

export default Profile
