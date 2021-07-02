import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 3.75rem;

  transition: background 0.5s;
  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
		flex: 1;
    justify-content: space-around;
  `}
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 1.5rem;
  margin: 1.1rem;
  position: relative;
  width: 1.5rem;
  &:hover {
    color: var(--highLight);
  }

	&.display {
    ${media.lessThan("large")`
			display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highLight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
		width: 3.2rem;
		margin: 0;
		text-align: center;

		svg {
			height: 100%;
		}
	`}
	
  ${props => {
    if (props.theme === "light") {
      return `
				color: #d4d400;
				&:hover {
					color: #e2e240
				}
			`
    }
  }}
`

export const MenuBarLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highLight);
  }
`
