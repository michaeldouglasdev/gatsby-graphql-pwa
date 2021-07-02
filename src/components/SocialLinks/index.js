import React from "react"
import Icons from "./icons"
import links from "./content"

import * as Styled from "./styled"

const SocialLinks = () => (
  <Styled.SocialLinksWrapper>
    <Styled.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <Styled.SocialLinksItem key={i}>
            <Styled.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferer"
            >
              <Styled.IconWrapper>
                <Icon></Icon>
              </Styled.IconWrapper>
            </Styled.SocialLinksLink>
          </Styled.SocialLinksItem>
        )
      })}
    </Styled.SocialLinksList>
  </Styled.SocialLinksWrapper>
)

export default SocialLinks
