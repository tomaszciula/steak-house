import styled from "styled-components";

const Button = styled.button`
width: ${props => props.width || "204px"};
height: ${props => props.height || "57px"};
background: #920303;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0;
:hover {
    cursor: pointer;
}
`

export default Button;