import { useEffect, useState } from "react";
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

function GenerateBill() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");

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
  }, [token]);

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
                <TableHeaderItem width="200px">Criado em</TableHeaderItem>
                <TableHeaderItem width="600px">Descrição</TableHeaderItem>
                <TableHeaderItem> </TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody scroll>
              {data.map((itemB, indB) => (
                <TableRow key={`row-${indB}`}>
                  <TableBodyItem width="230px" border key={`body-${indB}-m`}>
                    {itemB.data}
                  </TableBodyItem>
                  <TableBodyItem width="600px" border key={`body-${indB}-m`}>
                    {itemB.nome}
                  </TableBodyItem>
                  <TableBodyItem pr="10px" border key={`body-${indB}-m`}>
                    <LinkItem
                      onClick={() => downloadFile(itemB.arquivo)}
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
