import styled from "styled-components";
import resortImg from "../../assets/resort.jpeg";

const Background = styled.main`
  background: linear-gradient(
    135deg,
    rgba(19, 57, 92, 1) 10%,
    rgba(19, 57, 92, 0.87)
  );
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`;

const BackgroundCover = styled.div`
  background-image: url(${resortImg});
`;

export { Background, BackgroundCover };
