import {Global, css} from "@emotion/react"

const estilos = css`
font-family: 'Poppins', sans-serif;
`

//UMA CONSTANTE 'Estilos' RECEBE UMA AERO FUNCTION
export const Estilos = () => {
    return (<Global styles= {estilos}/>)
}