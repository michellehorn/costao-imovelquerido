import { WarningIcon } from "./styles";
import {
  Aligner,
  Table,
  TableBody,
  TableBodyItem,
  TableRow,
  Text,
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
  }, [token]);

  return (
    <>
      <Aligner mDisplayN direction="center" flex>
        <Text
          weight={weight.bold}
          fontSize={fontSize.label}
          color={colors.secondary}
          textAlign="center"
          mt="0"
        >
          Avisos
        </Text>
        <WarningIcon width="15px" height="15px" margin="10px" />
      </Aligner>
      <Aligner direction="center" flex>
        {!data ? (
          <Text weight={weight.regular} color={colors.primary}>
            Não existem avisos para serem mostrados.
          </Text>
        ) : (
          <Table>
            <TableBody padding="0 30px" height="100%">
              {data.map((itemB, indB) => (
                <TableRow key={`row-${indB}`}>
                  <TableBodyItem width="150px" border key={`body-${indB}-d`}>
                    {itemB.Data}
                  </TableBodyItem>
                  <TableBodyItem width="200px" border key={`body-${indB}-t`}>
                    {itemB.Titulo}
                  </TableBodyItem>
                  <TableBodyItem width="200px" border key={`body-${indB}-a`}>
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
