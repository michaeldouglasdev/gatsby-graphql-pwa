import React from "react"
import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { Lightbulb as Light } from "styled-icons/fa-regular/Lightbulb"

import * as Styled from "./styled"

const MenuBar = () => (
  <Styled.MenuBarWrapper>
    <Styled.MenuBarGroup>
      <Styled.MenuBarLink to="/" title="Voltar para Home">
        <Styled.MenuBarItem>
          <Home></Home>
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>
      <Styled.MenuBarLink to="/search" title="Pesquisar">
        <Styled.MenuBarItem>
          <Search></Search>
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>
    </Styled.MenuBarGroup>

    <Styled.MenuBarGroup>
      <Styled.MenuBarItem title="Mudar o tema">
        <Light></Light>
      </Styled.MenuBarItem>
      <Styled.MenuBarItem title="Mudar visualização">
        <Grid></Grid>
      </Styled.MenuBarItem>
      <Styled.MenuBarItem title="Ir para o topo">
        <Arrow></Arrow>
      </Styled.MenuBarItem>
    </Styled.MenuBarGroup>
  </Styled.MenuBarWrapper>
)

export default MenuBar
