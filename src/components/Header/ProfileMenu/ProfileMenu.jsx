import { useState } from "react";
import { ProfileIcon } from "../styles";
import { Menu, MenuItem } from "./styles";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const items = [
    { text: "Redefinir senha", link: "/forgot-password" },
    { text: "Sair", link: "/login" },
  ];
  return (
    <>
      <ProfileIcon onClick={() => setOpen(!open)} />
      {open && (
        <Menu>
          {items.map((item, index) => (
            <MenuItem key={index} href={item.link}>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default ProfileMenu;
