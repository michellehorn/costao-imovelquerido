import { SidebarArea, SidebarContainer, SidebarItemsArea } from "./styles";
import { DividerHorizontal, Link, LogoYellowBlue, Text } from "../../styles";
import { colors, weight, fontSize } from "../../theme";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const items = [
    {
      section: "Condomínio",
      subitems: [
        { text: "Emitir 2ª via de boleto", link: "/invoice" },
        { text: "Documentos", link: "/cond-docs" },
      ],
    },
    {
      section: "Locação",
      subitems: [
        { text: "Extrato de locação", link: "/statement" },
        { text: "Documentos", link: "/loc-docs" },
      ],
    },
  ];
  return (
    <>
      <SidebarContainer sidebarOpen={isOpen} onClick={() => toggleSidebar()} />
      <SidebarArea open={isOpen}>
        <LogoYellowBlue width="130px" height="130px" margin="50px auto" />
        <SidebarItemsArea>
          {items.map((item, indIt) => (
            <>
              <Text
                weight={weight.light}
                size={fontSize.subtext}
                color={colors.primary}
                key={indIt}
                mb="15px"
              >
                {item.section}
              </Text>
              {item.subitems.map((subItem, indSub) => (
                <Link
                  decoration="none"
                  pl="5px"
                  href={subItem.link}
                  key={indSub}
                >
                  {subItem.text}
                </Link>
              ))}
              <DividerHorizontal padding="30px 0 0" />
            </>
          ))}
        </SidebarItemsArea>
      </SidebarArea>
    </>
  );
};

export default Sidebar;
