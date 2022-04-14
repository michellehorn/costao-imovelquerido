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
import { fetchFile } from "../../services/download-file";
import UserContext from "../../context/UserContext";

function Documents({ type }) {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const { state, setState } = useContext(UserContext);

  const downloadFile = async (fileId, fileName, tokenI) => {
    setState({ ...state, loading: true });
    await fetchFile("documento", fileId, fileName, tokenI);
    setState({ ...state, loading: false });
  };

  const handleTitle = (type) =>
    ({ C: "do Condomínio", L: "de Pool" }[type] || "");

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
    if (type === "C") {
      setState({
        breadcrumb: [
          {
            text: "Home",
            link: "/",
          },
          { text: "Condomínio", link: "/cond" },
          { text: "Documentos do Condomínio" },
        ],
      });
    } else {
      setState({
        breadcrumb: [
          {
            text: "Home",
            link: "/",
          },
          { text: "Pool", link: "/loc" },
          { text: "Documentos de Pool" },
        ],
      });
    }
  }, [type, token, setState]);

  return (
    <>
      <FlexItem margin="auto" isFlex width="800px">
        <Aligner direction="center">
          <SectionTitle>{`Documentos ${handleTitle(type)}`}</SectionTitle>
          {!data ? (
            <SectionTitle
              mt="40px"
              weight={weight.light}
              color={colors.primary}
            >
              Não existem documentos para serem mostrados.
            </SectionTitle>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem mWidth="90px">Data</TableHeaderItem>
                  <TableHeaderItem>Descrição</TableHeaderItem>
                  <TableHeaderItem></TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody scroll>
                {data.map((itemB, indB) => (
                  <TableRow key={`row-${indB}`}>
                    <TableBodyItem
                      width="200px"
                      border
                      key={`body-${itemB.data}-m`}
                    >
                      {itemB.data}
                    </TableBodyItem>
                    <TableBodyItem
                      width="600px"
                      border
                      key={`body-${itemB.nome}-m`}
                    >
                      {itemB.nome}
                    </TableBodyItem>
                    <TableBodyItem border key={`body-${itemB.id}-m`} pr="10px">
                      <LinkItem
                        onClick={() => token && downloadFile(itemB.id, itemB.arquivo, token)}
                        hasCursor
                        color={colors.primary}
                        pt="0"
                        flex
                      >
                        Visualizar
                      </LinkItem>
                    </TableBodyItem>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Aligner>
      </FlexItem>
    </>
  );
}

export default Documents;
