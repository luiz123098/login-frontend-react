import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const WhiteDiv = styled.div`
display: flex;
justify-content: center; /* alinhar horizontalmente */
position: absolute;
width: 944px;
height: 555px;
left: 450px;
top: 150px;

background: rgba(255, 255, 255, 0.8);
box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
border-radius: 16px;
`

export const RigthCard = ({children}) => {
    return  (
                <WhiteDiv>
                    {children}                
                </WhiteDiv>
            )
}