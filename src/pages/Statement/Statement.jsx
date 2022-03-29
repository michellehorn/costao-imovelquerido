import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { colors, weight } from "../../theme";

import {
  Aligner,
  FlexItem,
  Input,
  SectionTitle,
  Table,
  TableBody,
  TableBodyItem,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableRow,
  Text,
} from "../../styles";
import { Select } from "../../components";

function Statement() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [monthYear, setMonthYear] = useState("122021");
  const [uhs, setUhs] = useState(0);
  const [uhSetted, setUhSetted] = useState("0");

  const fetchDocs = (token, my, uh) => {
    api
      .get(`/uh/${uh}/extrato?mesano=${my}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setData(null);
      });
  };

  const fetchUhs = (token) => {
    api
      .get("/uh", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUhs(res.data);
      });
  };

  useEffect(() => {
    fetchUhs(token);
  }, [token]);

  useEffect(() => {
    fetchDocs(token, monthYear, uhSetted);
  }, [token, monthYear, uhSetted]);

  const convertToReal = (value) => `R$${Number(value).toFixed(2)}`;
  const convertCredDeb = (value) => (value === "C" ? "Crédito" : "Débito");

  const handleInputDateChange = (e) => {
    const { value } = e.target;

    const formattedValue = value.replace(/[^0-9]/g, "");

    if (formattedValue.length === 6) {
      setMonthYear(formattedValue);
    }
  };

  const handleUhChange = (e) => {
    setUhSetted(e.target.value);
  };

  return (
    <FlexItem margin="0px auto 30px" isFlex width="800px">
      <Aligner direction="center">
        <SectionTitle>Extrato de locação</SectionTitle>
        <FlexItem flex>
          <div style={{ marginRight: "20px" }}>
            <Text>Mês/Ano</Text>
            <Input
              onChange={(e) => handleInputDateChange(e)}
              placeholder="Ex: 02/2021"
              width="100px"
              color={colors.primary}
            />
          </div>
          <div>
            <Text>Apto</Text>
            <Select onChange={handleUhChange} items={uhs} />
          </div>
        </FlexItem>
        {!data ? (
          <SectionTitle mt="40px" weight={weight.light} color={colors.primary}>
            Não existem documentos para serem mostrados.
          </SectionTitle>
        ) : (
          <TableContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem width="85px">Apto</TableHeaderItem>
                  <TableHeaderItem width="120px">Data</TableHeaderItem>
                  <TableHeaderItem width="400px">Historico</TableHeaderItem>
                  <TableHeaderItem width="100px">Valor</TableHeaderItem>
                  <TableHeaderItem>Cred/Deb</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody height="170px" scroll>
                {data.map((itemB, indB) => (
                  <TableRow key={`row-${indB}`}>
                    <TableBodyItem
                      width="65px"
                      border
                      key={`body-${itemB.Apto}-${indB}`}
                    >
                      {itemB.Apto}
                    </TableBodyItem>
                    <TableBodyItem
                      width="120px"
                      border
                      key={`body-${itemB.Data}-xx`}
                    >
                      {itemB.Data}
                    </TableBodyItem>
                    <TableBodyItem
                      width="400px"
                      border
                      key={`body-${itemB.Historico}-xx`}
                    >
                      {itemB.Historico}
                    </TableBodyItem>
                    <TableBodyItem
                      width="100px"
                      border
                      key={`body-${itemB.Valor}-xx`}
                    >
                      {convertToReal(itemB.Valor)}
                    </TableBodyItem>
                    <TableBodyItem border key={`body-${itemB.CredDeb}-xx`}>
                      {convertCredDeb(itemB.CredDeb)}
                    </TableBodyItem>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Aligner>
    </FlexItem>
  );
}

export default Statement;
