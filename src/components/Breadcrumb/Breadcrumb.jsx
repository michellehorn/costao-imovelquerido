import { FlexItem, Link } from "../../styles";
import { Chevron } from "./styles";

function Breadcrumb({ items }) {
  if (!items) return null;
  return (
    <FlexItem flex>
      {items.map((item) => (
        <>
          <Link
            decoration={item.link ? "underline" : "none"}
            noCursor={!item.link}
            href={item.link && item.link}
            w="400"
            pl="0 .7em"
          >
            {item.text}
          </Link>
          <Chevron />
        </>
      ))}
    </FlexItem>
  );
}

export default Breadcrumb;
