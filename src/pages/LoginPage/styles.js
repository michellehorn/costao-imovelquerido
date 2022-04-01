import styled from "styled-components";
import resortImg from "../../assets/resort.jpeg";

const Background = styled.main`
  background: linear-gradient(
    135deg,
    rgba(19, 57, 92, 1) 10%,
    rgba(19, 57, 92, 0.87)
  );
  height: 100%;
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: center;
  text-align: center;
  @media (max-width: 500px) {
    flex-direction: column;
    position: relative;
  }
`;

const BackgroundCover = styled.div`
  background-image: url(${resortImg});
  height: 100%;
  background-size: cover;

  @media (max-width: 500px) {
    padding-right: 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
  }
  
  `;

export { Background, BackgroundCover };
