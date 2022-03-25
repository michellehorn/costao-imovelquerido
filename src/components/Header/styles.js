import styled from "styled-components";
import resortImg from "../../assets/resort.jpeg";
import iconPerson from "../../assets/icon_person.svg";
import iconList from "../../assets/icon_list.svg";

const HeaderStyle = styled.header`
  background: linear-gradient(
    135deg,
    rgba(19, 57, 92, 1) 10%,
    rgba(19, 57, 92, 0.87)
  );
  width: 100vw;
  height: 250px;
`;

const HeaderImage = styled.div`
  background-image: url(${resortImg});
`;

const ListIcon = styled.button`
  background-image: url(${iconList});
  position: absolute;
  width: 35px;
  height: 20px;
  left: 20px;
  top: 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const ProfileIcon = styled.button`
  background-image: url(${iconPerson});
  position: absolute;
  width: 35px;
  height: 35px;
  right: 20px;
  top: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export { HeaderImage, HeaderStyle, ListIcon, ProfileIcon };
