import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ProfileIcon } from "../styles";
import { Menu, MenuItem, UserName } from "./styles";
import { api } from "../../../services/api";
import UserContext from "../../../context/UserContext";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [uhs, setUhs] = useState();
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const { state } = useContext(UserContext);

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
        {state.flg_admin ? null : (
          <span>Proprietário(a) do(s) apto(s): {uhs && uhs.toString()}</span>
        )}
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
