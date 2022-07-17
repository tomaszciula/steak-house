import styled from "styled-components";

const BackgroundBox = styled.div`
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.backgroundColor || "black"};
  width: max-content;
  height: max-content;
`;

export default BackgroundBox;
