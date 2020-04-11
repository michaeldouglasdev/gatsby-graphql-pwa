import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import * as Styled from "./styled"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

const Layout = ({ children }) => {
  return (
    <Styled.LayoutWrapper>
      <GlobalStyles />
      <Sidebar></Sidebar>
      <Styled.LayoutMain>{children}</Styled.LayoutMain>
      <MenuBar></MenuBar>
    </Styled.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
