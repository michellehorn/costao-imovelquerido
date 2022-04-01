import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ProfileIcon } from "../styles";
import { Menu, MenuItem, UserName } from "./styles";
import { api } from "../../../services/api";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [uhs, setUhs] = useState();
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");

  const fetchUhs = (token) => {
    api
      .get("/uh", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const aux = [];
        res.data.map((item) => aux.push(item.descricao));
        setUhs(aux);
      });
  };

  useEffect(() => {
    fetchUhs(token);
  }, [token]);

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <>
      <ProfileIcon onClick={() => setOpen(!open)} />
      <UserName>
        Seja bem vindo(a), {name}
        <br />
        Proprietário(a) do(s) apto(s): {uhs && uhs.toString()}
      </UserName>

      {open && (
        <Menu>
          <MenuItem href="/change-password">Redefinir senha</MenuItem>
          <MenuItem onClick={() => logout()}>Sair</MenuItem>
        </Menu>
      )}
    </>
  );
}

export default ProfileMenu;
