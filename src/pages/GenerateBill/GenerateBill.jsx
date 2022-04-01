import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { colors, weight } from "../../theme";

import {
  Aligner,
  FlexItem,
  LinkItem,
  SectionTitle,
  Table,
  TableBody,
  TableBodyItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
} from "../../styles";
import UserContext from "../../context/UserContext";

function GenerateBill() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const { setState } = useContext(UserContext);

  const downloadFile = (file) => {
    window.open(file);
  };
  const fetchDocs = (token) => {
    api
      .get(`/documento/C`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchDocs(token);
    setState({
      breadcrumb: [
        {
          text: "Home",
          link: "/",
        },
        { text: "Condomínio", link: "/cond" },
        { text: "Emitir 2ª via de boleto" },
      ],
    });
  }, [token, setState]);

  return (
    <FlexItem margin="auto" isFlex width="800px">
      <Aligner direction="center">
        <SectionTitle>Emissão de 2ª via de boleto</SectionTitle>
        {!data ? (
          <SectionTitle mt="40px" weight={weight.light} color={colors.primary}>
            Não existem documentos para serem mostrados.
          </SectionTitle>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem width="130px" mWidth="85px">
                  Criado em
                </TableHeaderItem>
                <TableHeaderItem width="400px" mWidth="130px">
                  Descrição
                </TableHeaderItem>
                <TableHeaderItem width="100px" mWidth="50px">
                  Status
                </TableHeaderItem>
                <TableHeaderItem> </TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody scroll>
              {data.map((itemB, indB) => (
                <TableRow key={`row-${indB}`}>
                  <TableBodyItem width="130px" border key={`body-${indB}-m`}>
                    {itemB.data}
                  </TableBodyItem>
                  <TableBodyItem width="400px" border key={`body-${indB}-m`}>
                    {itemB.nome}
                  </TableBodyItem>
                  <TableBodyItem width="100px" border key={`body-${indB}-m`}>
                    {itemB.aberto ? "Aberto" : "Pago"}
                  </TableBodyItem>
                  <TableBodyItem pr="10px" border key={`body-${indB}-m`}>
                    <LinkItem
                      onClick={() => downloadFile(itemB.id, itemB.arquivo)}
                      hasCursor
                      pr="10px"
                      color={colors.primary}
                      pt="0"
                      flex
                    >
                      Imprimir
                    </LinkItem>
                  </TableBodyItem>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Aligner>
    </FlexItem>
  );
}

export default GenerateBill;
