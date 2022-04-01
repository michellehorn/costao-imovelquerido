import styled from "styled-components";

const Chevron = styled.div`
  &::after {
    content: ">";
  }
  &:last-of-type {
      display: none;
  }
`;

export { Chevron };
