import theme from "../styles/theme.styles"
import { GlobalStyles } from "../styles/global.styles"
import { ThemeProvider } from "styled-components"
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app"
import type { NextComponentType } from "next"
import { ReactNode } from "react"
import Main from "./index"

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
    Component,
    pageProps,
}: AppLayoutProps) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page: ReactNode) => page)

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                {/* {getLayout(<Component {...pageProps} />)} */}
                <Main/>
            </ThemeProvider>
        </>
    )
}

export default MyApp