import styled from "styled-components";

const Text = styled.p`
  font-size: ${props => props.size || "14px"};
  font-weight: ${props => props.weight || "400"};
  color: ${props => props.color || "#000000"};
  line-height: ${props => props.lineHeight || "14px"}
  font-family: ${props => props.fontFamily || "Poppins"}
`
export default Text;