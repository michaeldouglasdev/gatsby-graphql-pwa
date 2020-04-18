import styled from "styled-components"
import { Link } from "gatsby"

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
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 1.5rem;
  padding: 1.1rem;
  position: relative;
  width: 1.5rem;
  &:hover {
    color: var(--highLight);
  }

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

export const MenuBarLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highLight);
  }
`
