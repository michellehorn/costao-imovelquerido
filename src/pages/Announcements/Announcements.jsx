import { WarningIcon } from "./styles";
import {
  Aligner,
  LinkItem,
  Table,
  TableBody,
  TableBodyItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
  Text
} from "../../styles";
import { colors, fontSize, weight } from "../../theme";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Announcements = () => {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");

  const fetchAlerts = (token) => {
    api
      .get(`/aviso`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchAlerts(token);
    console.log(data);
  }, [token]);

  return (
    <>
      <Aligner direction="center" flex>
        <Text
          weight={weight.bold}
          padding="10px 10px 30px 0"
          fontSize={fontSize.label}
          color={colors.secondary}
          textAlign="center"
        >
          Avisos
        </Text>
        <WarningIcon width="15px" height="15px" />
      </Aligner>
      <Aligner direction="center" flex>
        {!data ? (
          <Text weight={weight.regular} color={colors.primary}>
            Não existem avisos para serem mostrados.
          </Text>
        ) : (
          <Table>
            <TableBody padding="0 30px 40px">
              {data.map((itemB, indB) => (
                <TableRow key={`row-${indB}`}>
                  <TableBodyItem width="100px" border key={`body-${indB}-m`}>
                    {itemB.Data}
                  </TableBodyItem>
                  <TableBodyItem  width="600px" border key={`body-${indB}-m`}>
                    {itemB.Titulo}
                  </TableBodyItem>
                  <TableBodyItem width="200px" border key={`body-${indB}-m`}>
                    {itemB.Aviso}
                  </TableBodyItem>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Aligner>
    </>
  );
};

export default Announcements;
