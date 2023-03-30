import{ ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        white: '',
        atention: '',
        foucus: '',
        
        primaries: {
            a: '',
            b: '',
            c: ''
        },
        secondaries: {
            a: '',
            b: '',
            c: ''
        },
        neutral: {
            a: '',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: ''
        }
    }
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}