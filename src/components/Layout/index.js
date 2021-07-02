import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import * as Styled from "./styled"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import { TransitionPortal } from "gatsby-plugin-transition-link"

const Layout = ({ children }) => {
  return (
    <Styled.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar></Sidebar>
      </TransitionPortal>
      <Styled.LayoutMain>{children}</Styled.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar></MenuBar>
      </TransitionPortal>
    </Styled.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
