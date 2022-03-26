import {
  Aligner,
  FlexItem,
  SectionTitle,
  Table,
  TableBody,
  TableBodyItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
} from "../../styles";

function GenerateBill() {
  const items = {
    header: [
      { text: "Mês ref.", size: "130px" },
      { text: "Descrição", size: "340px" },
      { text: "Vencimento", size: "205px" },
      { text: "", size: "30px" },
    ],
    values: [
      {
        month: "01/22",
        description: "Despesas condominais",
        due_date: "10/02/22",
        download_link: "https://",
      },
    ],
  };

  return (
    <FlexItem margin="auto" isFlex width="640px">
      <Aligner direction="center">
        <SectionTitle>Emissão de 2ª via de boleto</SectionTitle>
        <Table>
          <TableHeader>
            <TableRow>
              {items.header.map((itemH, indH) => (
                <TableHeaderItem width={itemH.size} key={`header-${indH}`}>
                  {itemH.text}
                </TableHeaderItem>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.values.map((itemB, indB) => (
              <TableRow>
                <TableBodyItem key={`body-${indB}-m`}>
                  {itemB.month}
                </TableBodyItem>

                <TableBodyItem key={`body-${indB}-d`}>
                  {itemB.description}
                </TableBodyItem>

                <TableBodyItem key={`body-${indB}-dd`}>
                  {itemB.due_date}
                </TableBodyItem>

                <TableBodyItem key={`body-${indB}-l`}>
                  {itemB.download_link}
                </TableBodyItem>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Aligner>
    </FlexItem>
  );
}

export default GenerateBill;
