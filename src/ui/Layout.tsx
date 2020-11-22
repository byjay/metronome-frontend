import styled from 'styled-components'


export const Layout = styled.section`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-areas: "nav nav"
                       "sidebar  content";
 grid-template-columns: 150px 1fr;
 grid-template-rows: 50px 1fr;
`

export const Navigation = styled.nav`
  grid-area: nav;
  background-color: blue;
`

export const Content = styled.article`
  grid-area: content;
  background-color: yellow;
`

export const SideBar = styled.aside`
    grid-area: sidebar;
    background-color: red;
`

