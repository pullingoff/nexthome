import Navbar from "./Nav/Navbar"
import Footer from "./Footer"
import styled, { ThemeProvider } from "styled-components";
import styledTheme from "../styles/theme";
import { ReactNode } from "react";

const Layout = ({ children } : {children: ReactNode}) => {

    return (
        <ThemeProvider theme={styledTheme}>
            <Navbar/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </ThemeProvider>
    )
}

export default Layout

const Content = styled.main`
max-width: var(--breakpoint-desktop);
margin: auto;
padding: 10px 20px;
background: var(--bg-yellow);
border-bottom: 1px solid var(--theme2-color);
`