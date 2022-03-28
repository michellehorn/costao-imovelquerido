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

function Documents({ type }) {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");

  const downloadFile = (file) => {
    window.open(file);
  };

  const handleTitle = (type) =>
    ({ C: "Condominiais", L: "de Locação" }[type] || "");

  const fetchDocs = (type, token) => {
    api
      .get(`/documento/${type}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchDocs(type, token);
  }, [type, token]);

  return (
    <FlexItem margin="auto" isFlex width="800px">
      <Aligner direction="center">
        <SectionTitle>{`Documentos ${handleTitle(type)}`}</SectionTitle>
        {!data ? (
          <SectionTitle mt="40px" weight={weight.light} color={colors.primary}>
            Não existem documentos para serem mostrados.
          </SectionTitle>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem width="200px">Criado em</TableHeaderItem>
                <TableHeaderItem>Descrição</TableHeaderItem>
                <TableHeaderItem> </TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody scroll>
              {data.map((itemB, indB) => (
                <TableRow key={`row-${indB}`}>
                  <TableBodyItem width="200px" border key={`body-${indB}-m`}>
                    {itemB.data}
                  </TableBodyItem>
                  <TableBodyItem width="600px" border key={`body-${indB}-m`}>
                    {itemB.nome}
                  </TableBodyItem>
                  <TableBodyItem border key={`body-${indB}-m`}>
                    <LinkItem
                      onClick={() => downloadFile(itemB.arquivo)}
                      hasCursor
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

export default Documents;
