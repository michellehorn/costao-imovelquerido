import styled from "styled-components";

const ImgRender = styled.img`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "100px"};
`;

export { ImgRender };
