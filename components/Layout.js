import Navbar from "./Navbar"
import Footer from "./Footer"
import styled, { ThemeProvider } from "styled-components";
import styledTheme from "../styles/theme";

export default function Layout({ children }){

    return (
        <ThemeProvider theme={styledTheme}>
            <Navbar/>
            <Content
                // bg = {isColored? 'var(--color-background)' : 'initial'}
            >
            {children}</Content>
            <Footer/>
        </ThemeProvider>
    )
}

const Content = styled.main`
max-width: var(--breakpoint-desktop);
margin: auto;
padding: 10px 20px;
// background: var(--color-background);
// background: ${(props) => props.bg};
border-bottom: 1px solid var(--theme2-color);
`