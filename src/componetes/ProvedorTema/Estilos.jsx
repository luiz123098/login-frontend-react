import { css, Global} from "@emotion/react"

const estilos = css`
    *{
        background-color: #4651EA;
        font-family: 'Poppins', sans-serif;
    }
`

//UMA CONSTANTE 'Estilos' RECEBE UMA AERO FUNCTION
export const Estilos = () => {
    return (<Global styles= {estilos}/>)
}