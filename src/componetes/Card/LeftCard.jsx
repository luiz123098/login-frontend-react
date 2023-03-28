import styled from "@emotion/styled"

const BlueDiv = styled.div`
position: absolute;
width: 304px;
height: 555px;
left: 450px;
top: 150px;
background: #000CB2;
border-radius: 16px 0px 0px 16px;
`

export const Card = ({ children }) => {
     return (
            <BlueDiv>
                {children}
            </BlueDiv>
            )
}