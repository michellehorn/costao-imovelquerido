import { WarningIcon } from "./styles";
import {
  Aligner,
  Link,
  Table,
  TableBody,
  TableBodyItem,
  TableRow,
  Text,
} from "../../styles";
import { Modal } from "../../components";
import { colors, fontSize, weight } from "../../theme";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Announcements = () => {
  const [data, setData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const token = localStorage.getItem("token");

  const fetchAlerts = (token) => {
    api
      .get(`/aviso`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
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
                    <Link
                      onClick={() => {
                        setModalOpen(true);
                        setModalData({
                          id: itemB.id,
                          title: itemB.Titulo,
                          text: itemB.Aviso,
                          arquivo: itemB.arquivo,
                          flg_arquivo: itemB.flg_arquivo,
                          token: token
                        });
                      }}
                    >
                      Abrir aviso
                    </Link>
                  </TableBodyItem>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <Modal
          closeModal={setModalOpen}
          data={modalData}
          isOpen={isModalOpen}
        />
      </Aligner>
    </>
  );
};

export default Announcements;
