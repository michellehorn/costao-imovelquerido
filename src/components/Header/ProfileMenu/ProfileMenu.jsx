import { useState } from "react";
import { useNavigate } from "react-router";
import { ProfileIcon } from "../styles";
import { Menu, MenuItem } from "./styles";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/ login");
  };
  return (
    <>
      <ProfileIcon onClick={() => setOpen(!open)} />
      {open && (
        <Menu>
          <MenuItem href="/forgot-password">
            Redefinir senha
          </MenuItem>
          <MenuItem onClick={() => logout()}>
            Sair
          </MenuItem>
        </Menu>
      )}
    </>
  );
}

export default ProfileMenu;
