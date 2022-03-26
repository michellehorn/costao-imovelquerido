import { useEffect, useState } from "react";
import { colors } from "../../theme";
import {
  Aligner,
  FlexItem,
  LinkItem,
  PdfIcon,
  SectionTitle,
  Table,
  TableBody,
  TableBodyItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
} from "../../styles";

import { billItems, condItems, locItems, statementItems } from "./mockFile";

function Documents({ type }) {
  const [data, setData] = useState(null);
  const [hasBorder, setBorder] = useState(true);
  console.log(type);
  useEffect(() => {
    switch (type) {
      case "loc":
        setData(locItems);
        break;
      case "cond":
        setData(condItems);
        break;
      case "bill":
        setData(billItems);
        setBorder(false);
        break;
      case "statement":
        setData(statementItems);
        setBorder(false);
        break;
      default:
        break;
    }
  }, [type]);

  const downloadFile = (file) => {
    window.open(file);
  };

  if (!data) return null;

  return (
    <FlexItem margin="auto" isFlex width="640px">
      <Aligner direction="center">
        <SectionTitle>{data.title}</SectionTitle>
        <Table>
          <TableHeader>
            <TableRow>
              {data.header.map((itemH, indH) => (
                <TableHeaderItem width={itemH.size} key={`header-${indH}`}>
                  {itemH.text}
                </TableHeaderItem>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.values.map((itemB, indB) => (
              <TableRow>
                <TableBodyItem border={hasBorder} key={`body-${indB}-m`}>
                  {itemB.created_at || itemB.month}
                </TableBodyItem>

                <TableBodyItem border={hasBorder} key={`body-${indB}-d`}>
                  {itemB.description}
                </TableBodyItem>

                {itemB.due_date && (
                  <TableBodyItem border={hasBorder} key={`body-${indB}-d`}>
                    {itemB.due_date}
                  </TableBodyItem>
                )}

                <TableBodyItem border={hasBorder} key={`body-${indB}-l`}>
                  <LinkItem
                    onClick={() => downloadFile(itemB.download_link)}
                    hasCursor
                    color={colors.primary}
                    pt="0"
                    flex
                  >
                    {type === "bill" ? (
                      <>Emitir 2ª via</>
                    ) : (
                      <>
                        {" "}
                        Imprimir <PdfIcon />
                      </>
                    )}
                  </LinkItem>
                </TableBodyItem>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Aligner>
    </FlexItem>
  );
}

export default Documents;
