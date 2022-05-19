import { useNavigate } from "react-router-dom";
import { FlexItem, Link } from "../../styles";
import { Chevron } from "./styles";

function Breadcrumb({ items }) {
  const navigate = useNavigate();

  if (!items) return null;

  return (
    <FlexItem flex>
      {items.map((item, index) => (
        <div key={`breadcrumb-${index}`}>
          <Link
            decoration={item.link ? "underline" : "none"}
            noCursor={!item.link}
            onClick={() => navigate(item.link)}
            w="400"
            pl="0 .7em"
          >
            {item.text}
          </Link>
          <Chevron />
        </div>
      ))}
    </FlexItem>
  );
}

export default Breadcrumb;
