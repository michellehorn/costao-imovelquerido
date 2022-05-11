import { useEffect, useState, useContext } from "react";
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
  TextItem,
} from "../../styles";
import { Select } from "../../components";
import UserContext from "../../context/UserContext";

function Statement() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [message, setMessage] = useState();
  const [monthYear, setMonthYear] = useState("122021");
  const [uhs, setUhs] = useState(0);
  const [uhSetted, setUhSetted] = useState("0");
  const { setState } = useContext(UserContext);

  const date = new Date();
  const month =
    date.getMonth().length > 1 ? date.getMonth() : `0${date.getMonth()}`;
  const my = `${date.getFullYear()}-${month}`;

  const formattedValue = (value) => value.replace(/[^0-9]/g, "");

  const fetchDocs = (token, my, uh) => {
    const y = my.slice(0, 4);
    let m = my.slice(4, 7);
    api
      .get(`/uh/${uh}/extrato?mesano=${m}${y}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (typeof res.data === "string") {
          setMessage(res.data);
          setData(null);
        } else {
          setMessage(null)
          setData(res.data);
        }
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
    setMonthYear(formattedValue(my));
    setState({
      breadcrumb: [
        {
          text: "Home",
          link: "/",
        },
        { text: "Pool", link: "/loc" },
        { text: "Extrato de Locação" },
      ],
    });
  }, [token, my, setState]);

  useEffect(() => {
    fetchDocs(token, monthYear, uhSetted);
  }, [token, monthYear, uhSetted, my]);

  const isNeg = (value) => {
    const hasSign = value.indexOf("-");
    if (hasSign === 0) return true;
    return false;
  };

  const handleInputDateChange = (e) => {
    const { value } = e.target;

    const newV = formattedValue(value);

    if (newV.length === 6) {
      setMonthYear(newV);
    }
  };

  const handleUhChange = (e) => {
    setUhSetted(e.target.value);
  };

  return (
    <FlexItem margin="0px auto 30px" isFlex width="fit-content">
      <Aligner direction="center">
        <SectionTitle>Extrato de locação</SectionTitle>
        <FlexItem flex>
          <div style={{ marginRight: "20px" }}>
            <Text>Mês/Ano</Text>
            <Input
              onChange={(e) => handleInputDateChange(e)}
              placeholder={`Ex: ${my}`}
              width="250px"
              color={colors.primary}
              defaultValue={my}
              type="month"
            />
          </div>
          <div>
            <Text>Apto</Text>
            <Select onChange={handleUhChange} items={uhs} />
          </div>
        </FlexItem>
        {message && (
          <SectionTitle mt="40px" weight={weight.light} color={colors.primary}>
            {message}.
          </SectionTitle>
        )}
        {!data && !message ? (
          <SectionTitle mt="40px" weight={weight.light} color={colors.primary}>
            Não existem documentos para serem mostrados.
          </SectionTitle>
        ) : (
          !message && (
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderItem width="85px">Apto</TableHeaderItem>
                    <TableHeaderItem width="400px">Data</TableHeaderItem>
                    <TableHeaderItem width="fit-content">Valor</TableHeaderItem>
                  </TableRow>
                </TableHeader>
                <TableBody height="170px">
                  {data?.map((itemB, indB) => (
                    <TableRow key={`row-${indB}`}>
                      <TableBodyItem
                        width="85px"
                        border
                        key={`body-${itemB.Apto}-${indB}`}
                      >
                        <h4>{itemB.Apto}</h4>
                      </TableBodyItem>
                      <TableBodyItem
                        width="400px"
                        border
                        key={`body-${itemB.Data}-xx`}
                      >
                        <TextItem>{itemB.Data}</TextItem>
                        <TextItem>{itemB.Historico}</TextItem>
                      </TableBodyItem>

                      <TableBodyItem
                        width="fit-content"
                        border
                        weight="500"
                        key={`body-${itemB.Valor}-xx`}
                      >
                        <TextItem
                          color={
                            isNeg(itemB.Valor) ? colors.red : colors.primary
                          }
                        >
                          {itemB.Valor ? `R$ ${itemB.Valor}` : "ㅤ"}
                        </TextItem>
                      </TableBodyItem>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        )}
      </Aligner>
    </FlexItem>
  );
}

export default Statement;
