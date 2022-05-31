import Navbar from "./nav/Navbar"
import Footer from "./Footer"
import styled, { ThemeProvider } from "styled-components";
import styledTheme from "@styles/theme";
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
max-width: calc(var(--breakpoint-desktop) - 100px);
margin: auto;
padding: 25px;
background: var(--bg-yellow);
border-bottom: 1px solid lightgrey;
min-height: 80vh;
`