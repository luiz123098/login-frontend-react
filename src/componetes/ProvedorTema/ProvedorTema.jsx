import{ ThemeProvider } from '@emotion/react'

const tema = {}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}